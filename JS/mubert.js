/* 
^https:\/\/api\.mubert\.com\/v2\/(AppCheckReceipt|AppGetPages)
*/
var obj = JSON.parse($response.body);
obj["status"] = 1;
obj["data"]["purchases"] = [
      {
        "subscription" : "com.mubert.renewable.subscription.year.premium.trial",
        "expiry_date" : 4092346814
      }
  ];
obj["data"]["premium"] = true;
$done({body: JSON.stringify(obj)});
