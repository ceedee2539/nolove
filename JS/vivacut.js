var obj = JSON.parse($response.body);

obj= {
  "code" : 200,
  "data" : {
    "list" : [
      {
        "autoRenewProductId" : "com.vivacut.videoeditor.yearlypro",
        "orderId" : "540000583420361",
        "isTrialPeriod" : true,
        "endTime" : 1599440267000,
        "productId" : "com.vivacut.videoeditor.yearlypro",
        "productType" : 3,
        "startTime" : 1600821611000,
        "orderStatus" : 1,
        "autoRenewStatus" : true,
        "originalOrderId" : "540000583420361",
        "sign" : "ad5df185afe0fb4cfbf2f80b106a2de6"
      }
    ],
    "hasFreedTrialProds" : [
      "com.vivacut.videoeditor.yearlypro"
    ],
    "systemDate" : 1600821617634,
    "hasPurchasedProds" : [
      "com.vivacut.videoeditor.yearlypro"
    ]
  },
  "message" : "successful",
  "success" : true
};

 $done({body: JSON.stringify(obj)});
 