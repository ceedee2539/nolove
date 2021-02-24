const headers = $request.headers;

$prefs.removeAllValues();

// mojo
if (headers["User-Agent"].indexOf("SKVideo") != -1) {
  $prefs.setValueForKey("true", "mojo");
} else {
  $prefs.setValueForKey("false", "mojo");
}

// darkroom
if (headers["User-Agent"].indexOf("Darkroom") != -1) {
  $prefs.setValueForKey("true", "drkrm");
} else {
  $prefs.setValueForKey("false", "drkrm");
}

// live wallpaper
if (headers["User-Agent"].indexOf("WallpaperApp") != -1) {
  $prefs.setValueForKey("true", "lvwllpp");
} else {
  $prefs.setValueForKey("false", "lvwllpp");
}

// paper
if (headers["User-Agent"].indexOf("Paper") != -1) {
  $prefs.setValueForKey("true", "ppr");
} else {
  $prefs.setValueForKey("false", "ppr");
}

// fonos
if (headers["User-Agent"].indexOf("Fonos") != -1) {
  $prefs.setValueForKey("true", "fono");
} else {
  $prefs.setValueForKey("false", "fono");
}

// pigment
if (headers["User-Agent"].indexOf("Pigment") != -1) {
  $prefs.setValueForKey("true", "pigment");
} else {
  $prefs.setValueForKey("false", "pigment");
}

// atlas english
if (headers["User-Agent"].indexOf("byroon") != -1) {
  $prefs.setValueForKey("true", "atlaseng");
} else {
  $prefs.setValueForKey("false", "atlaseng");
}

// tone perfect pitch
if (headers["User-Agent"].indexOf("Perfect%20Pitch") != -1) {
  $prefs.setValueForKey("true", "tone");
} else {
  $prefs.setValueForKey("false", "tone");
}

// logo shop
if (headers["User-Agent"].indexOf("Logo%20Maker") != -1) {
  $prefs.setValueForKey("true", "logomaker");
} else {
  $prefs.setValueForKey("false", "logomaker");
}

// weatherkit
if (headers["User-Agent"].indexOf("WeatherKit") != -1) {
  $prefs.setValueForKey("true", "weatherkit");
} else {
  $prefs.setValueForKey("false", "weatherkit");
}

// zero for gmail
if (headers["User-Agent"].indexOf("Zero%20for%20Gmail") != -1) {
  $prefs.setValueForKey("true", "zero");
} else {
  $prefs.setValueForKey("false", "zero");
}

// BUNPOU
if (headers["User-Agent"].indexOf("BUNPOU") != -1) {
  $prefs.setValueForKey("true", "bunpou");
} else {
  $prefs.setValueForKey("false", "bunpou");
}

// weatherline
if (headers["User-Agent"].indexOf("Weather%20Line") != -1) {
  $prefs.setValueForKey("true", "weatherline");
} else {
  $prefs.setValueForKey("false", "weatherline");
}

// 1blocker
if (headers["User-Agent"].indexOf("1Blocker") != -1) {
  $prefs.setValueForKey("true", "1blocker");
} else {
  $prefs.setValueForKey("false", "1blocker");
}

// noto
if (headers["User-Agent"].indexOf("Noto") != -1) {
  $prefs.setValueForKey("true", "noto");
} else {
  $prefs.setValueForKey("false", "noto");
}

// pillow
if (headers["User-Agent"].indexOf("Pillow") != -1) {
  $prefs.setValueForKey("true", "pillow");
} else {
  $prefs.setValueForKey("false", "pillow");
}

// airmail
if (headers["User-Agent"].indexOf("Airmail") != -1) {
  $prefs.setValueForKey("true", "airmail");
} else {
  $prefs.setValueForKey("false", "airmail");
}

// strucc
if (headers["User-Agent"].indexOf("Strucc") != -1) {
  $prefs.setValueForKey("true", "strucc");
} else {
  $prefs.setValueForKey("false", "strucc");
}
$done({headers});
