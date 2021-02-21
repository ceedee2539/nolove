var obj = JSON.parse($response.body);
obj = {
  "result" : {
    "_id" : "f7bbf5b8-3776-4361-88cd-94c3600e5ae5",
    "period" : "12",
    "subscriptionId" : null,
    "ownerId" : null,
    "startDate" : "2020-09-15T05:21:10+0000",
    "endDate" : "2099-09-19T05:21:10+0000",
    "createDate" : "2020-09-15T05:21:16+0000",
    "permissions" : null
  }
}
$done({body: JSON.stringify(obj)});
