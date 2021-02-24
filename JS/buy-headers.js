const headers = $request.headers;

$prefs.removeAllValues();

if (headers["User-Agent"].indexOf("Presets") != -1) {
  $prefs.setValueForKey("true", "lrprst");
}
if (headers["User-Agent"].indexOf("Koloro") != -1) {
  $prefs.setValueForKey("true", "klr");
}

$done({headers});