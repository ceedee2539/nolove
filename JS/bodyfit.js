/*
^ttps:\/\/subscription-api\.bodybuilding\.com\/entitlements\/check url script-response-body kd-qx/JS/bodyfit.js
  
hostname = subscription-api.bodybuilding.com
  
*/

var obj = JSON.parse($response.body);
obj.active = "true";
obj.isFreeTrialEligible = "false";
//obj.inGracePeriod = "true";
$done({body: JSON.stringify(obj)});
