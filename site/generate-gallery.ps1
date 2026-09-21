$galleryRoot = "public/images/gallery"

Get-ChildItem $galleryRoot -Directory | ForEach-Object {
  Write-Host "Category:" $_.Name

  Get-ChildItem $_.FullName -Directory | ForEach-Object {
    Write-Host " Character:" $_.Name

    Get-ChildItem $_.FullName -Directory | ForEach-Object {
      $set = $_

      $images = Get-ChildItem $set.FullName -Filter *.webp |
      Where-Object { $_.Name -ne "cover.webp" } |
      Sort-Object Name

      Write-Host "  Set:" $set.Name "(" $images.Count "images )"
    }
  }

  $images = Get-ChildItem "public/images/gallery/ToLOVE-ru/lala/normal" -Filter *.webp |
  Where-Object { $_.Name -ne "cover.webp" } |
  Sort-Object Name

  $content = @"
export const images = [
$(
    $images | ForEach-Object {
        "  `"/images/gallery/ToLOVE-ru/lala/normal/$($_.Name)`","
    }
)
];
"@

  $content | Set-Content src/content/test-gallery.ts
}
