var obj = JSON.parse($response.body);
obj.member_type= "Premium";
$done({body: JSON.stringify(obj)});
