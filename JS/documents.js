var obj = {
  "originalTransactionId" : 540000746783665,
  "inAppStates" : [
    {
      "originalTransactionId" : 540000746783665,
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month12new",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "04:52 16/07/2099",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOn",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [

      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1594874544000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
};

$done({body: JSON.stringify(obj)});
