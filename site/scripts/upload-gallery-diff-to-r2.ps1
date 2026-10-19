
# R2 Gallery incremental uploader
# Uploads only new or modified WebP files.
# Does not delete remote files.

$Bucket = "nnzzm-images"
$DryRun = $false

# Locate the local gallery directory.
$candidate1 = Join-Path $PSScriptRoot "..\public\images\gallery"
$candidate2 = Join-Path $PSScriptRoot "..\..\site\public\images\gallery"

if (Test-Path -LiteralPath $candidate1 -PathType Container) {
    $SourceRoot = $candidate1
} elseif (Test-Path -LiteralPath $candidate2 -PathType Container) {
    $SourceRoot = $candidate2
} else {
    Write-Host "Gallery directory not found." -ForegroundColor Red
    Write-Host $candidate1
    Write-Host $candidate2
    exit 1
}

$SourceRoot = (Resolve-Path $SourceRoot).Path.TrimEnd('\', '/')

# Store the manifest next to this script.
$ManifestPath = Join-Path $PSScriptRoot "r2-gallery-manifest.json"

function Get-R2Key($file) {
    $relative = $file.FullName.Substring($SourceRoot.Length).TrimStart('\', '/')
    return "gallery/" + $relative.Replace('\', '/')
}

function Get-FileHashValue($file) {
    $sha256 = [System.Security.Cryptography.SHA256]::Create()

    try {
        $stream = [System.IO.File]::OpenRead($file.FullName)

        try {
            $hashBytes = $sha256.ComputeHash($stream)
            return ([System.BitConverter]::ToString($hashBytes)).Replace("-", "")
        }
        finally {
            $stream.Dispose()
        }
    }
    finally {
        $sha256.Dispose()
    }
}


function Save-Manifest {
    $entries = @(
        foreach ($entryKey in $manifest.Keys) {
            [PSCustomObject]@{
                key  = [string]$entryKey
                hash = [string]$manifest[$entryKey]
            }
        }
    )

    $json = ConvertTo-Json -InputObject $entries -Depth 3
    $utf8 = New-Object System.Text.UTF8Encoding($false)

    [System.IO.File]::WriteAllText(
        $ManifestPath,
        $json,
        $utf8
    )
}


$files = @(Get-ChildItem -LiteralPath $SourceRoot -Recurse -File -Filter "*.webp")

Write-Host "Source: $SourceRoot"
Write-Host "Local WebP files: $($files.Count)"

if ($files.Count -eq 0) {
    Write-Host "No WebP files found. Aborting." -ForegroundColor Red
    exit 1
}

# First run: create a baseline manifest without uploading.
# Assumes the current local files already match R2.
if (-not (Test-Path -LiteralPath $ManifestPath)) {
    Write-Host ""
    Write-Host "No manifest found. Creating initial baseline." -ForegroundColor Yellow
    Write-Host "No files will be uploaded during this run."

    $manifest = @{}
    $index = 0

    foreach ($file in $files) {
        $index++
        $key = Get-R2Key $file
        $manifest[$key] = Get-FileHashValue $file

        if ($index % 100 -eq 0 -or $index -eq $files.Count) {
            Write-Progress `
                -Activity "Building baseline manifest" `
                -Status "$index / $($files.Count)" `
                -PercentComplete (($index / $files.Count) * 100)
        }
    }

    Write-Progress -Activity "Building baseline manifest" -Completed
    Save-Manifest

    Write-Host "Baseline created: $ManifestPath" -ForegroundColor Green
    Write-Host "Review the manifest before the next run."
    exit 0
}


# Load existing manifest.
try {
    Write-Host "Manifest path: $ManifestPath"
    Write-Host "Manifest file size: $((Get-Item -LiteralPath $ManifestPath).Length) bytes"
    $json = [System.IO.File]::ReadAllText($ManifestPath)

    Write-Host "JSON starts with: $($json.Substring(0, [Math]::Min(80, $json.Length)))"
    Write-Host "JSON starts with [: $($json.TrimStart().StartsWith('['))"

    $entries = $json | ConvertFrom-Json -ErrorAction Stop
    Write-Host "Entries type: $($entries.GetType().FullName)"
    Write-Host "First item type: $($entries[0].GetType().FullName)"
    Write-Host "First item key: $($entries[0].key)"

    Write-Host "Entries loaded from JSON: $($entries.Count)"

    $manifest = @{}

    foreach ($entry in $entries) {
        if ([string]::IsNullOrWhiteSpace([string]$entry.key) -or
            [string]::IsNullOrWhiteSpace([string]$entry.hash)) {
            throw "Invalid manifest entry."
        }

        $manifest[[string]$entry.key] = [string]$entry.hash
    }

    Write-Host "Manifest keys after loading: $($manifest.Count)"
} catch {
    Write-Host "Could not read manifest. Aborting." -ForegroundColor Red
    Write-Host $_.Exception.Message
    exit 1
}


# Identify new and modified files.
$pending = @()
$unchanged = 0
Write-Host "Loaded manifest keys: $($manifest.Count)"

foreach ($file in $files) {
    $key = Get-R2Key $file
    $hash = Get-FileHashValue $file

    if (-not $manifest.ContainsKey($key) -or
        $manifest[$key] -ne $hash) {
        $pending += [PSCustomObject]@{
            File = $file
            Key  = $key
            Hash = $hash
        }
    } else {
        $unchanged++
    }
}

Write-Host ""
Write-Host "New or modified: $($pending.Count)"
Write-Host "Unchanged:       $unchanged"
Write-Host "Remote deletion: disabled"
if ($DryRun) {
    Write-Host "Preview mode. Nothing will be uploaded." -ForegroundColor Yellow
    Write-Host "Pending file count: $($pending.Count)"
    exit 0
}

if ($pending.Count -eq 0) {
    Write-Host "Nothing to upload." -ForegroundColor Green
    exit 0
}

# Preview mode.
if ($DryRun) {
    Write-Host ""
    Write-Host "Preview mode. Nothing was uploaded." -ForegroundColor Yellow

    $pending | ForEach-Object {
        Write-Host $_.Key
    }

    Write-Host ""
    Write-Host 'Set $DryRun = $false to upload these files.'
    exit 0
}

# Upload differences.
$success = 0
$failed = 0
$index = 0

foreach ($item in $pending) {
    $index++

    Write-Progress `
        -Activity "Uploading changes to R2" `
        -Status "$index / $($pending.Count): $($item.Key)" `
        -PercentComplete (($index / $pending.Count) * 100)

    & npx wrangler r2 object put "$Bucket/$($item.Key)" `
        --file "$($item.File.FullName)" `
        --content-type "image/webp" `
        --remote

    if ($LASTEXITCODE -eq 0) {
        $manifest[$item.Key] = $item.Hash
        Save-Manifest
        $success++
    } else {
        $failed++
        Write-Host "Upload failed: $($item.Key)" -ForegroundColor Red
    }
}

Write-Progress -Activity "Uploading changes to R2" -Completed

Write-Host ""
Write-Host "Upload finished."
Write-Host "Success: $success"
Write-Host "Failed:  $failed"

if ($failed -gt 0) {
    Write-Host "Failed files will be retried on the next run." -ForegroundColor Yellow
}
