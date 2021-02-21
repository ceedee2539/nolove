// ^https:\/\/m2u-api\.getkwai\.com\/vni-server\/api\/v1\/(vip\/iosReceiptCheck|user\/profile)* url script-response-body kd-qx/JS/bigshot.js

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const rcpcheck = '/vip/iosReceiptCheck';
const usrprofile = '/user/profile';

if (url.indexOf(rcpcheck) != -1) {
obj["data"]["result"] = "SUCCESS";
}

if (url.indexOf(usrprofile) != -1) {
obj["data"]["userInfo"]["vipEndTime"] = "4092346814";
obj["data"]["userInfo"]["isVip"] = 1;
obj["data"]["userInfo"]["hasTrial"] = 1;
obj["data"]["userInfo"]["vipStartTime"] = "1600007359457";
}

$done({body: JSON.stringify(obj)});  
