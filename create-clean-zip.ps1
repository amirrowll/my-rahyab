Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourceDir = (Resolve-Path "out").Path
$zipPath = Join-Path (Get-Location) "rahyab-website-export.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Write-Host "Creating Linux/POSIX compatible zip archive..."
$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $sourceDir -Recurse -File -Force
$count = 0

foreach ($file in $files) {
    $relPath = $file.FullName.Substring($sourceDir.Length + 1).Replace('\', '/')
    $entry = $zip.CreateEntry($relPath, [System.IO.Compression.CompressionLevel]::Optimal)
    $entryStream = $entry.Open()
    $fileStream = [System.IO.File]::OpenRead($file.FullName)
    $fileStream.CopyTo($entryStream)
    $fileStream.Dispose()
    $entryStream.Dispose()
    $count++
}

$zip.Dispose()
Write-Host "Successfully packaged $count files with standard forward slashes into $zipPath"
