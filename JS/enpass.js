var obj = JSON.parse($response.body); 
obj["error"]= false;
obj["license"]= "premium";
obj["code"]= "success";
obj["status"]= "active";
obj["duration"]= [{
    "end_date" : "4070965662",
    "start_date" : "1600146570"
}];
obj["info"]= [{
    "purchase_type" : "recurring",
    "store" : "ios",
    "id" : "ENP_ARS_1Y",
    "userid" : "329066",
    "transaction_id" : "540000579751716",
    "logo" : ""
}];
$done({body: JSON.stringify(obj)});

