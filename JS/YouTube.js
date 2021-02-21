/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js

(^https?:\/\/[\w-]+\.googlevideo\.com\/.+)(ctier=L)(&.+) url 302 $1$3
^https?:\/\/[\w-]+\.googlevideo\.com\/.+&(oad|ctier) url reject

[MITM]
hostname = *.googlevideo.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});