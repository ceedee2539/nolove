// ^https:\/\/(subscription\.aresframework\.com\/api\/purchase|www\.peacefulsoundsapp\.com\/api\/v1\/init)

let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "subscription.aresframework.com/api/purchase";
var cons1= "www.peacefulsoundsapp.com/api/v1/init";
if(url.indexOf(cons) != -1)
{
obj= {
  "success" : true,
  "errorCode" : null,
  "data" : {
    "subscriptions" : [
      {
        "cancellationDateTime" : null,
        "isRefunded" : 0,
        "isActive" : 1,
        "id" : 65876,
        "productCode" : "musicalm.subscription.annual",
        "storeOrderId" : "120000677608351",
        "inTrialPeriod" : 0,
        "inGracePeriod" : 0,
        "inPremiumPeriod" : 1,
        "expiresDateTime" : "2099-11-07 17:00:21"
      }
    ],
    "products" : [

    ]
  },
  "errorMessage" : null
}
};

if(url.indexOf(cons1) != -1)
{
obj["data"]["is_premium"]="1";
obj["meta"]["current_subscription_expiration_date"]= "31 Tháng mười 2099";
obj["meta"]["current_subscription_expiry_date"]= "2099-10-31 03:55:45";
}
$done({body: JSON.stringify(obj)});

