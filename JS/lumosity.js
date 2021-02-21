//https://www.lumosity.com/api/v2/user
var obj = JSON.parse($response.body);
obj.user={
		"id": 105748677,
		"unique_name": null,
		"email_address": "kaotd.z3@gmail.com",
		"url_slug": null,
		"updated_at": "2020-08-10T16:48:23.000Z",
		"first_name": "Dương",
		"last_name": null,
		"date_of_birth": "1999-05-05",
		"gender": "m",
		"education_level": 3,
		"training_priorities": ["Speed", "Problem Solving", "Flexibility", "Attention", "Memory"],
		"active_until": "2999-09-01",
		"account_state": "subscription",
		"bpt_test_id": null,
		"is_recurring": false,
		"roles": [{
			"id": 60,
			"name": "google_sign_in",
			"created_at": "2017-09-07T22:15:49.000Z",
			"updated_at": "2017-09-07T22:15:49.000Z",
			"deleted_at": null
		}],
		"crittercism_id": "LzZkeUEwWGZXZWdmVEc1bmZmQmlpZz09Cg",
		"leanplum_id": "aTU1eDBVZktPSnJ5cmRPeGxtTDVtZz09Cg",
		"crashlytics_id": "U1hDbFhvYmNPdVgvMDRIUnFXUnlVQT09Cg",
		"time_zone_name": "America/North_Dakota/Center",
		"occupation": 0,
		"small_thumbnail_url": "/lumosity/production/defaults/avatar/small-a11cde1610364a080fc0f0177aea23d8c7ee9f3467b6aa17e38e64f1f2244248.png",
		"medium_thumbnail_url": "/lumosity/production/defaults/avatar/medium-4fbb965d7f169bc61696cfecd2e9a00ff39cdd87f6b12d08ee6f337e81b9a28c.png",
		"large_thumbnail_url": "/lumosity/production/defaults/avatar/large-a4ca864ce452f29ffd622279d125b83d1a407eef01c015826e8c8ffef8c1f604.png",
		"assignment_id": "96853c06-ee94-47dc-bf72-48073d22595e",
		"referral": "DEFAULT_APPSTORE",
		"referrals": ["1151", "DEFAULT_APPSTORE"],
		"underage_at_signup": false,
		"ftc_notification": false,
		"brain_trainer_active_until": null,
		"has_facebook_identity": false,
		"split_test_assignments": [],
		"fit_test_completed": true,
		"country_code": "US",
		"billing_flow": "native",
		"is_resurrected": false,
		"is_in_free_trial": true,
		"is_in_no_cc_trial": false,
		"had_mobile_free_trial": true,
		"created_at": "2020-08-10T16:48:23+00:00"
};

$done({body: JSON.stringify(obj)});

//
