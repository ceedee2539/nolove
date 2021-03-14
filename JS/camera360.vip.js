var obj = JSON.parse($response.body);
obj = {
    "data":{
        "errorCode":0,
        "sandbox":0,
        "isTrialPeriod":0,
        "purchaseTime":1598155239,
        "expireTime":4091140839,
        "appleExpireTime":4091140839,
        "originalTransactionId":"540000568481558",
        "productId":"VIP_yearly_29.99",
        "appleVip":1,
        "operationVip":1,
        "giftVip":0
    },
    "status":200,
    "message":"ok",
    "serverTime":1598155311.9284,
    "exetime":"4091140909000-4091140912000"
};
$done({body: JSON.stringify(obj)});

