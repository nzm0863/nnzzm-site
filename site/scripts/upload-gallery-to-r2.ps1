
# R2一括アップロードスクリプト
# 最初は確認のみ。問題なければ $DryRun = $false に変更する。

$Bucket = "nnzzm-images"
$DryRun = $false

# リポジトリ直下・siteフォルダー内のどちらにも対応
$candidate1 = Join-Path $PSScriptRoot "..\public\images\gallery"
$candidate2 = Join-Path $PSScriptRoot "..\..\site\public\images\gallery"

if (Test-Path $candidate1) {
    $SourceRoot = $candidate1
} elseif (Test-Path $candidate2) {
    $SourceRoot = $candidate2
} else {
    Write-Host "画像フォルダーが見つかりません。" -ForegroundColor Red
    Write-Host "確認した場所:"
    Write-Host $candidate1
    Write-Host $candidate2
    exit 1
}

$SourceRoot = (Resolve-Path $SourceRoot).Path.TrimEnd('\')
$files = @(Get-ChildItem $SourceRoot -Recurse -File -Filter "*.webp")

Write-Host "対象フォルダー: $SourceRoot"
Write-Host "対象ファイル数: $($files.Count)"

if ($files.Count -eq 0) {
    Write-Host "WebPファイルがありません。" -ForegroundColor Yellow
    exit 0
}

# 相対パスを表示して、フォルダー構造を確認する
$files | Select-Object -First 10 | ForEach-Object {
    $relative = $_.FullName.Substring($SourceRoot.Length).TrimStart('\', '/')
    $key = "gallery/" + $relative.Replace('\', '/')
    Write-Host $key
}

if ($DryRun) {
    Write-Host ""
    Write-Host "確認モードです。まだアップロードしていません。" -ForegroundColor Yellow
    Write-Host "問題なければ `$DryRun = `$false に変更して再実行してください。"
    exit 0
}

$success = 0
$failed = 0
$index = 0

foreach ($file in $files) {
    $index++
    $relative = $file.FullName.Substring($SourceRoot.Length).TrimStart('\', '/')
    $key = "gallery/" + $relative.Replace('\', '/')

    Write-Progress `
        -Activity "R2へアップロード中" `
        -Status "$index / $($files.Count) : $key" `
        -PercentComplete (($index / $files.Count) * 100)

    & npx wrangler r2 object put "$Bucket/$key" `
        --file "$($file.FullName)" `
        --content-type "image/webp" `
        --remote

    if ($LASTEXITCODE -eq 0) {
        $success++
    } else {
        $failed++
        Write-Host "失敗: $key" -ForegroundColor Red
    }
}

Write-Progress -Activity "R2へアップロード中" -Completed

Write-Host ""
Write-Host "アップロード完了"
Write-Host "成功: $success"
Write-Host "失敗: $failed"

if ($failed -gt 0) {
    Write-Host "失敗したファイルを確認してください。" -ForegroundColor Yellow
}
