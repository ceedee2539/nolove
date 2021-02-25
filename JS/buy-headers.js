const headers = $request.headers;

$prefs.removeAllValues();

if (headers["User-Agent"].indexOf("Presets") != -1) {
  $prefs.setValueForKey("true", "lrprst");
} else {
  $prefs.setValueForKey("false", "lrprst");
}

if (headers["User-Agent"].indexOf("Koloro") != -1) {
  $prefs.setValueForKey("true", "klr");
} else {
  $prefs.setValueForKey("false", "klr");
}

$done({headers});
