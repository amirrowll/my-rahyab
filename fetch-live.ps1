$content = (Invoke-WebRequest -Uri "https://myrahyab.ir/" -UseBasicParsing).Content
$matches = [regex]::Matches($content, '<link[^>]+rel="stylesheet"[^>]*>')
foreach ($m in $matches) {
    Write-Host $m.Value
}
$scriptMatches = [regex]::Matches($content, '<script[^>]+src="[^"]+"[^>]*>')
foreach ($s in $scriptMatches) {
    Write-Host $s.Value
}
