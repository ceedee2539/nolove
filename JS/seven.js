var obj = JSON.parse($response.body);

obj=
{
  "subscription_purchases" : [
    {
      "period" : "P1Y",
      "status" : "normal",
      "price" : 1199000000000,
      "expires_at" : {
        "offset" : 0,
        "timestamp" : 3809414583
      },
      "sku_identifier" : "S_Club_E_12Months",
      "trial_period" : "P1Y",
      "purchased_at" : {
        "offset" : 0,
        "timestamp" : 1599820983
      },
      "grace_period_days" : 365,
      "currency" : "VND",
      "auto_renew" : true,
      "store" : "app_store"
    }
  ],
  "subscription_purchases_state" : 2821723639
};

$done({body: JSON.stringify(obj)});
