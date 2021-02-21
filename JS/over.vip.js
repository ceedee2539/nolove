var obj = JSON.parse($response.body);
obj["user"]["subscription"] = {
      "usedFreeTrials" : [
        "com.overhq.over.subscription.overpro.yearly.14_99_and_99_99.localised"
      ],
      "subscriptionState" : "FREE_TRIAL",
      "subscription" : "com.overhq.over.subscription.overpro.yearly.14_99_and_99_99.localised",
      "isSubscriptionActive" : true,
      "isFreeTrialActive" : true,
      "subscriptionExpiryDate" : "2099-10-31T15:34+0000",
      "subscriptionExpiryDateMs" : 4097144060000,
      "entitlement" : [
        "OVER_PRO"
      ]
    };
$done({body: JSON.stringify(obj)});