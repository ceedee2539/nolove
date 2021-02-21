var obj = JSON.parse($response.body);
obj = {
	"shopItems": [{
		"purchaseDate": 1599558485,
		"subscriptionInfo": {
			"renewing": true,
			"isInBillingRetryPeriod": false,
			"price": 860000,
			"isFreeTrialPeriod": true,
			"currency": "JPY",
			"isIntroOfferPeriod": false,
			"renewer": "APPLE",
			"tier": "twelve_month",
			"periodLength": 12,
			"expectedExpiration": 1600768085,
			"productId": "com.duolingo.DuolingoMobile.subscription.Premium.TwelveMonth.202014DayTrial.Trial14.80"
		},
		"purchasePrice": 7999,
		"purchaseId": "110f788159ca7d2a0a9cb4c5ceb0d437",
		"itemName": "premium_subscription",
		"id": "premium_subscription"
	}, {
		"purchaseDate": 1599559621,
		"purchasePrice": 0,
		"purchaseId": "2d38da8f341eccc671609d2b75e0405b",
		"itemName": "timer_boost_perk",
		"id": "timer_boost_perk",
		"quantity": 3
	}, {
		"purchaseDate": 1599558349,
		"purchasePrice": 0,
		"purchaseId": "5ef334f1d1b8e862d0040137ac753cdc",
		"itemName": "streak_freeze",
		"id": "streak_freeze",
		"quantity": 1
	}, {
		"purchaseId": "2d38da8f341eccc671609d2b75e0405b",
		"purchaseDate": 1599559621,
		"itemName": "streak_repair",
		"id": "streak_repair",
		"purchasePrice": 0
	}]
}
$done({body: JSON.stringify(obj)});
