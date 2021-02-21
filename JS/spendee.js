// ^https:\/\/api\.spendee\.com\/.*\/(sync-device|user-set-subscription|auth\/login)$

let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "v1.8/sync-device";
var cons1 = "v1.5/user-set-subscription";
var cons2 = "v3/auth/login";

if(url.indexOf(cons) != -1)
{
obj["result"]["remote_sync"]["latest_subscription_product_id"]="com.cleevio.spendee.premium.month";
obj["result"]["remote_sync"]["user_plus"]="false";
obj["result"]["remote_sync"]["user_lifetime"]="false";
obj["result"]["remote_sync"]["user_premium"]="true";
obj["result"]["remote_sync"]["subscription_period"]="MONTH";
obj["result"]["remote_sync"]["premium_expiration"]="2099-11-11";
}

if(url.indexOf(cons1) != -1)
{
obj["result"]["premium_operator"]="null";
obj["result"]["type"]="premium";
obj["result"]["expiration"]="2099-11-11";
}

if(url.indexOf(cons2) != -1)
{
obj["user_profile"]["subscription_period"]="MONTH";
obj["user_profile"]["type"]="premium";
obj["user_profile"]["premium_expiration"]="2099-11-11 12:00:00";
}

$done({body: JSON.stringify(obj)});
