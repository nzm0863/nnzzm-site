# public/images 以下の png/jpg/jpeg を全部 WebP に変換して元画像を削除

$cwebp = "C:\Tools\webp\bin\cwebp.exe"
$target = ".\public\images"

Get-ChildItem $target -Recurse -File -Include *.png, *.jpg, *.jpeg |
ForEach-Object {

  $output = $_.FullName -replace "\.(png|jpg|jpeg)$", ".webp"

  & $cwebp `
    -q 90 `
    $_.FullName `
    -o $output

  if (Test-Path $output) {
    Remove-Item $_.FullName
    $count++
    Write-Host "✅ Converted:" $_.Name
  }

  Write-Host ""
  Write-Host "🎉 $count files converted to WebP."
}