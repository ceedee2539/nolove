let obj=JSON.parse($response.body);
let url=$request.url;

//if(url.endsWith("offerings")||url.endsWith("products")) {
if(url.endsWith("products")) {
	$done({});
} else {

// mojo
     if($prefs.valueForKey("mojo")=="true") {  
		obj["subscriber"]["entitlements"]["pro"]={
        "expires_date" : "2019-09-04T19:06:30Z",
        "product_identifier" : "video.mojo.pro.yearly",
        "purchase_date" : "2019-08-04T19:06:30Z"
		};
		
		obj["subscriber"]["subscriptions"]["video.mojo.pro.yearly"]={
        "is_sandbox" : false,
        "period_type" : "trial",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-09-04T19:06:30Z",
        "original_purchase_date" : "2019-08-04T19:06:30Z",
        "purchase_date" : "2019-08-04T19:06:30Z",
        "store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// darkroom
     if($prefs.valueForKey("drkrm")=="true") {  
		obj["subscriber"]["entitlements"]["co.bergen.Darkroom.entitlement.allToolsAndFilters"]={
        "expires_date" : "2099-02-18T07:52:54Z",
        "product_identifier" : "co.bergen.Darkroom.product.forever.everything",
        "purchase_date" : "2020-02-11T07:52:54Z"
		};
		
		obj["subscriber"]["subscriptions"]["co.bergen.Darkroom.product.forever.everything"]={
        "is_sandbox" : false,
        "period_type" : "normal",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-02-18T07:52:54Z",
        "original_purchase_date" : "2020-02-11T07:52:55Z",
        "purchase_date" : "2020-02-11T07:52:54Z",
        "store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// live wallpaper
     if($prefs.valueForKey("lvwllpp")=="true") {  
		obj["subscriber"]["entitlements"]["premium"]={
        "grace_period_expires_date" : null,
        "purchase_date" : "2020-12-18T04:10:45Z",
        "product_identifier" : "app.leoapp.1y_3dt_sub0001",
        "expires_date" : "2099-12-21T04:10:45Z"
		};
		
		obj["subscriber"]["subscriptions"]["app.leoapp.1y_3dt_sub0001"]={
        "is_sandbox" : false,
        "period_type" : "normal",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-12-21T04:10:45Z",
        "grace_period_expires_date" : null,
        "original_purchase_date" : "2020-12-18T04:10:45Z",
        "purchase_date" : "2020-12-18T04:10:45Z",
        "store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// paper
     if($prefs.valueForKey("ppr")=="true") {  
		obj["subscriber"]["entitlements"]["pro"]={
            "expires_date" : "2030-02-18T07:52:54Z",
            "product_identifier" : "com.fiftythree.paper.pro_12",
            "purchase_date" : "2020-02-11T07:52:54Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.fiftythree.paper.pro_12"]={
            "is_sandbox" : false,
            "period_type" : "normal",
            "billing_issues_detected_at" : null,
            "unsubscribe_detected_at" : null,
            "expires_date" : "2030-02-18T07:52:54Z",
            "original_purchase_date" : "2020-02-11T07:52:55Z",
            "purchase_date" : "2020-02-11T07:52:54Z",
            "store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// fonos
     if($prefs.valueForKey("fono")=="true") {  
		obj["subscriber"]["entitlements"]["subscription"]={
			"grace_period_expires_date" : null,
            "purchase_date" : "2020-11-05T07:03:11Z",
            "product_identifier" : "vn.fonos.mobile.subscription.annually",
            "expires_date" : "2090-12-05T07:03:11Z"
		};
		
		obj["subscriber"]["subscriptions"]["vn.fonos.mobile.subscription.annually"]={
            "is_sandbox" : false,
            "period_type" : "normal",
            "billing_issues_detected_at" : null,
            "unsubscribe_detected_at" : null,
            "expires_date" : "2090-12-05T07:03:11Z",
            "grace_period_expires_date" : null,
            "original_purchase_date" : "2020-11-05T07:03:15Z",
            "purchase_date" : "2020-11-05T07:03:11Z",
            "store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// pigment
     if($prefs.valueForKey("pigment")=="true") {  
		obj["subscriber"]["entitlements"]["Premium"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "com.pixite.pigment.1yearM",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.pixite.pigment.1yearM"]={
			"is_sandbox": false,
			"period_type" : "annual",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };


// atlas english
     if($prefs.valueForKey("atlaseng")=="true") {  
		obj["subscriber"]["entitlements"]["Premium"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "com.gocas.byroon.yearly",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.gocas.byroon.yearly"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// tone perfect pitch
     if($prefs.valueForKey("tone")=="true") {  
		obj["subscriber"]["entitlements"]["pro"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "tonepro_v3_1year",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["tonepro_v3_1year"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// strucc
     if($prefs.valueForKey("strucc")=="true") {  
		obj["subscriber"]["entitlements"]["pro"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "studio.sweet.Strucc.yearly",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["studio.sweet.Strucc.yearly"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// pillow
     if($prefs.valueForKey("pillow")=="true") {  
		obj["subscriber"]["entitlements"]["premium"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "com.neybox.pillow.premium.year",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.neybox.pillow.premium.year"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// logo maker
     if($prefs.valueForKey("logomaker")=="true") {  
		obj["subscriber"]["entitlements"]["premium"]={
			"expires_date": "2099-10-23T00:54:44Z",
			"product_identifier": "com.limepresso.lm.paid.subscription.pro_monthly",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		obj["subscriber"]["subscriptions"]["com.limepresso.lm.paid.subscription.pro_monthly"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : null,
			"expires_date" : "2099-10-23T00:54:44Z",
			"original_purchase_date" : "2020-06-29T18:50:18Z",
			"purchase_date" : "2020-06-29T18:50:18Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// weatherkit
     if($prefs.valueForKey("weatherkit")=="true") {  
		obj["subscriber"]["other_purchases"]["org.weatherkit.lifetimeSubscription"]={
          "purchase_date": "2019-11-18T14:40:25Z"
		};
		obj["subscriber"]["non_subscriptions"]["org.weatherkit.lifetimeSubscription"]=[{
          "id" : "46cc962c9f",
          "is_sandbox" : false,
          "purchase_date" : "2019-11-18T14:40:25Z",
          "original_purchase_date" : "2019-11-18T14:40:25Z",
          "store" : "app_store"
		}];
          $prefs.removeAllValues();
     };

// zero for gmail
     if($prefs.valueForKey("zero")=="true") {  
		obj["subscriber"]["entitlements"]["Airmail Zero"]={
			"expires_date": "2099-10-23T00:54:44Z",
			"product_identifier": "AirmailZeroiOSYearly",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["AirmailZeroiOSYearly"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : null,
			"expires_date" : "2099-10-23T00:54:44Z",
			"original_purchase_date" : "2020-06-29T18:50:18Z",
			"purchase_date" : "2020-06-29T18:50:18Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// bunpou
     if($prefs.valueForKey("bunpou")=="true") {  
		obj["subscriber"]["entitlements"]["Pro"]={
			"expires_date": "2099-07-02T18:50:18Z",
			"product_identifier": "com.N2BunpouApp.yuki.product.yearlyPlan",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.N2BunpouApp.yuki.product.yearlyPlan"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : "2019-06-17T22:48:38Z",
			"expires_date" : "2099-06-14T21:07:40Z",
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// weatherline
     if($prefs.valueForKey("weatherline")=="true") {  
		obj["subscriber"]["entitlements"]["com.offcoast.weatherline.revenuecat.supercharge"]={
			"expires_date": null,
			"product_identifier": "com.offcoast.weatherline.iap.lifetimeunlock",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["com.offcoast.weatherline.iap.lifetimeunlock"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : null,
			"expires_date" : null,
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// 1blocker
     if($prefs.valueForKey("1blocker")=="true") {  
		obj["subscriber"]["entitlements"]["premium"]={
			"expires_date": null,
			"product_identifier": "blocker.ios.subscription.lifetime",
			"purchase_date": "2020-06-29T18:50:18Z"
		};
		
		obj["subscriber"]["subscriptions"]["blocker.ios.subscription.lifetime"]={
			"is_sandbox": false,
			"period_type" : "normal",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : null,
			"expires_date" : null,
			"original_purchase_date" : "2019-02-21T00:42:05Z",
			"purchase_date" : "2019-06-14T20:07:40Z",
			"store": "app_store"
		};
          $prefs.removeAllValues();
     };

// noto
     if($prefs.valueForKey("noto")=="true") {  
		obj["subscriber"]["entitlements"]["pro"]={
			"expires_date": "2099-02-18T07:52:54Z",
			"product_identifier": "com.lkzhao.editor.pro.ios.yearly",
			"purchase_date": "2020-02-11T07:52:54Z"
		};
		obj["subscriber"]["subscriptions"]["com.lkzhao.editor.pro.ios.yearly"]={
			"is_sandbox": false,
			"period_type" : "annual",
			"billing_issues_detected_at" : null,
			"unsubscribe_detected_at" : null,
			"expires_date" : "2099-02-18T07:52:54Z",
			"original_purchase_date" : "2020-02-11T07:52:55Z",
			"purchase_date" : "2020-02-11T07:52:54Z",
			"store" : "app_store"
		};
          $prefs.removeAllValues();
     };

// airmail
     if($prefs.valueForKey("airmail")=="true") {  
		obj["subscriber"]["entitlements"]["Airmail Premium"]={
				"expires_date": "2099-12-01T00:00:00Z",
				"product_identifier": "Airmail_iOS_Yearly",
				"purchase_date": "2019-12-01T00:00:00Z"
		};
		obj["subscriber"]["subscriptions"][
"Airmail_iOS_Yearly"]={
				"is_sandbox": false,
				"period_type": "active",
				"billing_issues_detected_at": null,
				"unsubscribe_detected_at": null,
				"expires_date": "2099-12-01T00:00:00Z",
				"original_purchase_date": "2019-10-31T00:00:00Z",
				"purchase_date": "2019-10-31T00:00:00Z",
				"store": "app_store"
		};
          $prefs.removeAllValues();
     };
}
$done({body:JSON.stringify(obj)});
