var obj = JSON.parse($response.body);

obj["subscription"]= {
		"type": "ACTIVE",
		"valid_until": 4092919589,
		"store": "APP_STORE",
		"trial_type": "CALENDAR_BASED",
		"time_left": 0,
		"price_id": "",
		"cancel_at_period_end": false,
		"period": "NOPERIOD"
    };

$done({body: JSON.stringify(obj)});

// Descriptions
