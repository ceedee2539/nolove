var obj = JSON.parse($response.body);
obj= {
  "status": "active",
  "service_level": 1
};

$done({body: JSON.stringify(obj)});


//HT
