//^https:\/\/s\.sleepcycle\.com\/(useraccountstats|api\/v1\/subscription\/get) url script-response-body new-sleep.js
//  if ($request.url.indexOf(path1) != -1){}

let obj = JSON.parse($response.body);
var url = $request.url;

const path1 = "useraccountstats";
const path2 = "api/v1/subscription/get";

if ($request.url.indexOf(path1) != -1){
    obj["status"]="ok";
    obj["receipt"]=[
{
    "estimated_renewal" : 4098210347,
    "valid" : true,
    "timestamp" : 1603237552,
    "renewal_info" : [
      {
        "product_id" : "onlinebackup_h_1y",
        "original_transaction_id" : "540000597366567",
        "auto_renew_product_id" : "onlinebackup_h_1y",
        "auto_renew_status" : "1"
      }
    ],
    "expires" : 4098210347,
    "renewal_state" : false
  }
];
}

if ($request.url.indexOf(path2) != -1){
    obj["subscription"]=[
{
    "product_id" : "onlinebackup_h_1y",
    "transaction_id" : "540000597366567",
    "campaign" : "permanent-smart-alarm",
    "features_rich" : [
      {
        "source" : "subscription",
        "name" : "online-backup",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "campaign",
        "name" : "smart-alarm",
        "source_value" : "permanent-smart-alarm",
        "expire_date" : null
      },
      {
        "source" : "subscription",
        "name" : "sleep-aid",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "analysis",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "snore",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "sleep-notes",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "premium-sounds",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "user-sounds",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "wake-up-mood",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "heart-rate",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "weather",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "health-kit",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "google-fit",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "statistics",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "philips-hue",
        "source_value" : "premium",
        "expire_date" : 4098210347
      },
      {
        "source" : "subscription",
        "name" : "home-kit",
        "source_value" : "premium",
        "expire_date" : 4098210347
      }
    ],
    "campaigns" : [
      "permanent-smart-alarm"
    ],
    "package_id" : "premium",
    "features" : [
      "online-backup",
      "smart-alarm",
      "sleep-aid",
      "analysis",
      "snore",
      "sleep-notes",
      "premium-sounds",
      "user-sounds",
      "wake-up-mood",
      "heart-rate",
      "weather",
      "health-kit",
      "google-fit",
      "statistics",
      "philips-hue",
      "home-kit"
    ],
    "trial" : null,
    "expire_date" : 4098210347
}
    ];
}

$done({body: JSON.stringify(obj)});
