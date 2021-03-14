let obj = JSON.parse($response.body);
let headers = $response.headers;
obj = 
{
  "service_access" : [
    {
      "lifetime" : 1,
      "product_id" : "com.ultimateguitar.ugt.ultimateall",
//      "date_access" : 32478447466,
      "product_code" : 83,
      "service_name" : "web_ug_pro_account",
      "auto_renew" : 0,
      "trial" : 0
    },
    {
      "lifetime" : 1,
      "product_id" : "com.ultimateguitar.ugt.ultimateall",
//      "date_access" : 32478447466,
      "product_code" : 83,
      "service_name" : "ios_ug_pro_account",
      "auto_renew" : 0,
      "trial" : 0
    },
    {
      "lifetime" : 1,
      "product_id" : "com.ultimateguitar.ugt.ultimateall",
//      "date_access" : 32478447466,
      "product_code" : 83,
      "payment_state" : 1,
      "service_name" : "android_ug_pro_account",
      "auto_renew" : 0,
      "trial" : 0
    }
  ]
};

$done({
    body: JSON.stringify(obj),
    headers: headers,
    status: 'HTTP/1.1 200 OK',
});
