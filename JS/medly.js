var obj = JSON.parse($response.body);

obj= {
  "subscriptionValid": true,
  "validObject": {
    "currentTime": 1607408392895,
    "responseRetry": 1607581192895,
    "responseExpire": 4098445339000,
    "receiptExpire": 4098445339000,
    "isTrial": false,
    "opaque": {
      "value": "d1TuwA7ByihaPXdtAEP19EKpYCk0ILAnLxTsr6Tb1zo=",
      "start": 60,
      "end": 104
    }
  },
  "subscriptionStatus": {
    "userId": "056e7afa-4768-473e-a70d-f1d98f86a67b",
    "autoRenewStatus": 1,
    "expirationIntent": -1,
    "isBillingRetry": false,
    "receiptCancelled": false,
    "autoRenewProductId": "com.medlylabs.member.common.yearly",
    "subscriptionProductId": "com.medlylabs.member.common.yearly",
    "hasConsumedTrial": false
  },
  "status": 0,
  "tokenId": "623f1bf0-391d-11eb-bf0d-8fe11e13b400",
  "exp": 4098445339,
  "iat": 1607408393
};
$done({body: JSON.stringify(obj)});
