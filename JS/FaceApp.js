/*
[Script]
http-response ^https?:\/\/api\.faceapp\.io(.*)\/api\/v.*\/auth\/user\/credentials requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/FaceApp.js

[MITM]
hostname = api.faceapp.io
*/

let headers = $response.headers; 
let obj = JSON.parse($response.body);
 
obj = {
  "subscription_apple" : {
    "subscription_exp" : 1608693282,
    "product_id" : "1"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiJDRDMwQjgzMi02QTIxLTRCN0UtOURFMy0xRjUzMUJDMTZDMUUiLCJleHAiOjE2MDg2OTMyODMsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjA4NjkzMjgyLCJjdXN0b21lcl9pZCI6ImlzMTc0NjAiLCJwcm9kdWN0X2lkIjoiMSJ9fQ.nWKB3hYO_KAI3OSwuBFWhFz84XcHMm4h8qzbhHRkE3Ntdp9JVtr1LSHuL2pyUOjhrMRm2OtR14T3A2BJEvvv9g",
  "user_token_lifetime" : 86400,
  "user" : null
};

delete headers['X-FaceApp-ErrorCode'];
 
$done({
    body: JSON.stringify(obj),
    headers: headers,
    status: 'HTTP/1.1 200 OK',
});
