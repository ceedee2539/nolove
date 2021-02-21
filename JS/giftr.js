var obj = JSON.parse($response.body);
obj={
  "result" : {
    "originalAppVersion" : "1000",
    "isValidSubscriber" : true,
    "isEligibleForFreeTrial" : true,
    "isEligibleForSubscriptionOffer" : true
};
$done({body: JSON.stringify(obj)});
