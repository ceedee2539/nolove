// ^https:\/\/api\.restsleepsounds\.com\/api\/v.*\/users\/(.*\/subscription||me)$

let obj = JSON.parse($response.body);

obj["subscriptionExpiredAt"]= "2099-06-10T23:19:06+00:00";
$done({body: JSON.stringify(obj)});
