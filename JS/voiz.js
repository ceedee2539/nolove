var body = $response.body;
var url = $request.url;
const path1 = '/api/v5/query';
let obj = JSON.parse(body);
if (url.indexOf(path1) != -1) {

obj["data"]["user_infor"]["user"]["user_vip_package"] = {
          "start_date" : "29-01-2021",
          "end_date" : "29-01-2022",
          "name" : "VIP",
          "package_type" : "vip",
          "remaining_date" : 365
        };
}

$done({body:JSON.stringify(obj)});
