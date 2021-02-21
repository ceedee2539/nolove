 obj = JSON.parse($response.body);
obj["accountInfo"]["membershipInfo"]={
      "autoRenewable" : 1,
      "membershipTier" : "premium_home",
      "isTrialPeriod" : 1,
      "dateExpire" : "2020-07-17",
      "dateStarted" : "2019-07-10",
      "membershipType" : "SPONLY",
      "familyIapID" : "com.joytunes.asla.subscriptiononeyear_trial_family",
      "daysRemaining" : 365,
      "planDuration" : "oneyear",
      "currentIapID" : "com.joytunes.asla.subscriptiononeyear_trial_individual",
      "membershipDescription" : "Premium member"
    };
$done({body: JSON.stringify(obj)});
