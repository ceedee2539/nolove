// ^https:\/\/api\.polarisoffice\.com\/api\/1\/account\/userinfo
let obj = JSON.parse($response.body);
obj["level"]="9";
$done({body: JSON.stringify(obj)});
