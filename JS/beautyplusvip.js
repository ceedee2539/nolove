var obj = JSON.parse($response.body);

//var timesp = obj.timestamp;
//obj = {"status":0,"subs_status":2,"vip_expires_date_ms":"1559822261000","vip_product_id":"com.commsource.beautyplus.subscription.1year.25discount.new.users.1205testA","timestamp":1571765082000};
//obj.timestamp = timesp;

obj=  {
  "status": 0,
  "expires_date": "9999-06-06 19:57:41"
};
$done({body: JSON.stringify(obj)});


// Mô tả
