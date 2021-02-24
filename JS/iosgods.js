var obj = JSON.parse($response.body);

obj["data"]["user"]["vip"] = true;
obj["data"]["user"]["group_id"] = 3;
$done({body: JSON.stringify(obj)});