Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path "rahyab-website-export.zip"))
$nextCount = 0
$total = $zip.Entries.Count
foreach ($entry in $zip.Entries) {
    if ($entry.FullName -like "*_next*") {
        $nextCount++
    }
}
$zip.Dispose()
Write-Host "Total entries in zip: $total"
Write-Host "Total _next entries in zip: $nextCount"
