var obj = JSON.parse($response.body);

obj.type= 2;
obj.expirationDate= "2999-01-10T15:35:13";

$done({body: JSON.stringify(obj)});

// Descriptions
