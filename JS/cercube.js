// const body = $response.body
// const obj = JSON.parse(body);
// obj["subscription"] = {
// 	"internalTransactionId": "R1JMPPQTTFV2ACX",
// 	"externalTransactionId": "pi_1GYpcsKPeH3mKXAmRXYQEvVI",
// 	"active": true,
// 	"startDate": "2020-04-17T08:32:42.000Z",
// 	"endDate": "2022-05-17T08:32:42.000Z"
// }
// $done({body: JSON.stringify(obj)});
var body = $response.body;
var user = {};
var obj = JSON.parse(body);
obj.status = "E_OKAY";
obj.code = 0;
obj.user = {
    "blocked": false,
    "roleId": 1,
    "didMigrate": true,
    "createdAt": "2020-02-22T05:28:53.541Z",
    "updatedAt": "2020-03-01T22:08:26.046Z"
};
body = JSON.stringify(obj);
$done({
    body
});