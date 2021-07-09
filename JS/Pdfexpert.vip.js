var obj = {
  "originalTransactionId" : 540000746160440,
  "inAppStates" : [
    {
      "originalTransactionId" : 540000746160440,
      "productId" : "com.readdle.PDFExpert5.subscription.year50",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "03:20 15/07/2099",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [
        "ios.pe.subscription.pdf-features",
        "macos.pe.subscription.pdf-features"
      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.PDFExpert5",
  "receiptId" : 1604245978000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
};

$done({body: JSON.stringify(obj)});
