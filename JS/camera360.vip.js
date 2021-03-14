let obj = JSON.parse($response.body);
obj["data"] = {
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
    };
obj["status"] = 200;
obj["message"] = "ok";
$done({body: JSON.stringify(obj)});