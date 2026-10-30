Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path "rahyab-website-export.zip"))
foreach ($entry in $zip.Entries) {
    if ($entry.FullName -like "*css*") {
        Write-Host $entry.FullName
    }
}
$zip.Dispose()
