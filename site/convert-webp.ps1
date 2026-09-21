Get-ChildItem .\public\images\gallery -Recurse -Include *.png, *.jpg, *.jpeg |
ForEach-Object {
  $output = $_.FullName -replace "\.(png|jpg|jpeg)$", ".webp"

  & "C:\Tools\webp\bin\cwebp.exe" `
    -q 90 `
    $_.FullName `
    -o $output

  Write-Host "Converted:" $_.Name
  if (Test-Path $output) {
    Remove-Item $_.FullName
  }
}