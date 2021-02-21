//^https:\/\/dupa-api\.doupaiapp\.com\/users\/(info|account) url script-response-body kd-qx/JS/vinkle.js

let obj = JSON.parse($response.body);
let url = $request.url;
var cons = "info";
var cons1= "account";
if(url.indexOf(cons) != -1)
{
obj["data"]["account"]["isVip"]= "1";
};
if(url.indexOf(cons1) != -1)
{
obj = {
  "data" : {
    "vipExpired" : 0,
    "vipPassDate" : "",
    "balance" : 0,
    "isVip" : 1
  },
  "code" : 0
}
}
$done({body: JSON.stringify(obj)});