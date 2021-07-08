var obj = JSON.parse($response.body);

obj = {
  "productId" : "com.readdle.ReaddleDocsIPad.subscription.year50",
  "receiptStatus" : "ok",
  "subscriptionExpirationDate" : "15:42 02/03/2021",
  "inAppStates" : [
    {
      "receiptStatus" : "ok",
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.year50",
      "isInGracePeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOn",
      "originalTransactionId" : 70000967969999,
      "isEligibleForIntroPeriod" : false,
      "subscriptionExpirationDate" : "15:42 02/03/2021",
      "type" : "subscription",
      "isInBillingRetryPeriod" : false,
      "subscriptionState" : "trial",
      "productName" : "subscription"
    }
  ],
  "isDocuments6User" : false,
  "isEligibleForIntroPeriod" : false,
  "originalTransactionId" : 70000967969999,
  "statisticsInfo" : [

  ],
  "isInBillingRetryPeriod" : false,
  "type" : "subscription",
  "inAppPurchased" : [
    "com.readdle.ReaddleDocsIPad.subscription.year50"
  ],
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1599743664000,
  "chargingPlatform" : "iOS AppStore",
  "subscriptionState" : "trial",
  "subscriptionAutoRenewStatus" : "autoRenewOn",
  "isInGracePeriod" : false
};
$done({body: JSON.stringify(obj)});
