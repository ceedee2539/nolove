
/*body = $response.body.replace(/preview/g, "free").replace(/view/g, "unlimited").replace(/true/g, "false");
let obj = JSON.parse(body);
obj["memberships"] = [
    {
      "iconUrl" : "",
      "id" : "1",
      "ownership" : "temporary",
      "validFrom" : 1562061591,
      "expireAt" : 4087274392,
      "name" : "会员",
      "usageType" : "unlimited"
    }
];

body = JSON.stringify(obj);
$done({body});*/

var obj = JSON.parse($response.body);
obj["memberships"] = [
    {
      "iconUrl" : "",
      "id" : "1",
      "ownership" : "temporary",
      "validFrom" : 1562061591,
      "expireAt" : 4087274392,
      "name" : "会员",
      "usageType" : "unlimited"
    }
];
$done({body: JSON.stringify(obj)});
