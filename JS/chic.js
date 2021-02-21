var obj = JSON.parse($response.body);
obj = {
  "result" : {
    "error" : {
      "message" : null,
      "code" : 0
    },
    "result" : {
      "status" : 0,
      "environment" : "Production",
      "receipt" : {
        "receipt_type" : "Production",
        "app_item_id" : 1462999056,
        "receipt_creation_date" : "2020-09-01 10:33:11 Etc/GMT",
        "bundle_id" : "com.meitu.chic",
        "original_purchase_date" : "2020-09-01 10:13:10 Etc/GMT",
        "in_app" : [
          {
            "quantity" : "1",
            "purchase_date_ms" : "1598956327000",
            "expires_date" : "2999-09-07 09:57:47 Etc/GMT",
            "expires_date_pst" : "2999-09-06 17:57:47 America/Los_Angeles",
            "is_in_intro_offer_period" : "false",
            "transaction_id" : "540000573062484",
            "is_trial_period" : "true",
            "original_transaction_id" : "540000573062484",
            "purchase_date" : "2020-09-01 10:32:07 Etc/GMT",
            "product_id" : "com.meitu.chic.20002",
            "original_purchase_date_pst" : "2020-09-01 03:32:07 America/Los_Angeles",
            "original_purchase_date_ms" : "1598956327000",
            "web_order_line_item_id" : "540000222034362",
            "expires_date_ms" : "1599440267000",
            "purchase_date_pst" : "2020-09-01 03:32:07 America/Los_Angeles",
            "original_purchase_date" : "2020-09-01 10:32:07 Etc/GMT"
          }
        ],
        "adam_id" : 1462999056,
        "receipt_creation_date_pst" : "2020-09-01 03:33:11 America/Los_Angeles",
        "request_date" : "2020-09-01 10:33:45 Etc/GMT",
        "request_date_pst" : "2020-09-01 03:33:45 America/Los_Angeles",
        "version_external_identifier" : 834702316,
        "request_date_ms" : "1598956425917",
        "original_purchase_date_pst" : "2020-09-01 03:13:10 America/Los_Angeles",
        "application_version" : "1.0.72.0",
        "original_purchase_date_ms" : "1598955190000",
        "receipt_creation_date_ms" : "1598956391000",
        "original_application_version" : "1.0.72.0",
        "download_id" : 94061386237060
      },
      "pending_renewal_info" : [
        {
          "product_id" : "com.meitu.chic.20002",
          "original_transaction_id" : "540000573062484",
          "auto_renew_product_id" : "com.meitu.chic.20002",
          "auto_renew_status" : "1"
        }
      ],
      "latest_receipt_info" : [
        {
          "quantity" : "1",
          "purchase_date_ms" : "1598956327000",
          "expires_date" : "2999-09-07 09:57:47 Etc/GMT",
          "expires_date_pst" : "2999-09-06 17:57:47 America/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "540000573062484",
          "is_trial_period" : "true",
          "original_transaction_id" : "540000573062484",
          "purchase_date" : "2020-09-01 10:32:07 Etc/GMT",
          "product_id" : "com.meitu.chic.20002",
          "original_purchase_date_pst" : "2020-09-01 03:32:07 America/Los_Angeles",
          "subscription_group_identifier" : "20546339",
          "original_purchase_date_ms" : "1598956327000",
          "web_order_line_item_id" : "540000222034362",
          "expires_date_ms" : "1599440267000",
          "purchase_date_pst" : "2020-09-01 03:32:07 America/Los_Angeles",
          "original_purchase_date" : "2020-09-01 10:32:07 Etc/GMT"
        }
      ],
      "latest_receipt" : "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"
    }
  }
};
$done({body: JSON.stringify(obj)});
