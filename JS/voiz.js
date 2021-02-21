// https://app.voiz.vn/api/v4/query 357579
// old script 
//var body = $response.body;
//var url = $request.url;
//const path1 = '/api/v4/2.1/query/';
//let obj = JSON.parse(body);
//if (url.indexOf(path1) != -1) {
//obj["data"]["user_infor"]["user"]["vip_listening_times"] = 99999999999;
//obj["data"]["user_infor"]["user"]["user_vip_package"]["start_date"] = "26-08-2020";
//obj["data"]["user_infor"]["user"]["user_vip_package"]["end_date"] = "02-09-2999";
//obj["data"]["user_infor"]["user"]["user_vip_package"]["remaining_date"] = 365;
//obj["data"]["user_infor"]["user"]["user_vip_package"]["name"] = "\u001d12 tháng VIP;
//}
//$done({body});
//$done({body: JSON.stringify(obj)});

// new script

var body = $response.body;
let obj = JSON.parse(body);
obj["data"]["user_infor"]["user"]["vip_listening_times"] = "99999999999";
obj["data"]["user_infor"]["user"]["user_vip_package"]["name"] = "12 tháng VIP";
obj["data"]["user_infor"]["user"]["user_vip_package"]["package_type"] = "free_trial";
obj["data"]["user_infor"]["user"]["user_vip_package"]["remaining_date"] = 722821;
obj["data"]["user_infor"]["user"]["user_vip_package"]["start_date"] = "26-08-2020";
obj["data"]["user_infor"]["user"]["user_vip_package"]["end_date"] = "02-09-3999";
obj["data"]["createAppStoreOrder"]["amount"] = "920000.0";
obj["data"]["createAppStoreOrder"]["start_date"] = "26-08-2020";
obj["data"]["createAppStoreOrder"]["end_date"] = "02-09-3999";
obj["data"]["createAppStoreOrder"]["payment_date"] = "08:22 26-08-2020";
obj["data"]["createAppStoreOrder"]["payment_method"] = "AppStore";

$done({body:JSON.stringify(obj)});
