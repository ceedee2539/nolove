var obj = JSON.parse($response.body);
obj= {
  "status" : "0",
  "receipt-data" : {
    "status" : 0,
    "environment" : "Production",
    "receipt" : {
      "receipt_type" : "Production",
      "app_item_id" : 1065511007,
      "receipt_creation_date" : "2020-08-31 01:04:25 Etc/GMT",
      "bundle_id" : "com.globaldelight.iBoom",
      "original_purchase_date" : "2020-08-30 23:55:37 Etc/GMT",
      "in_app" : [
        {
          "quantity" : "1",
          "purchase_date_ms" : "1598835467000",
          "expires_date" : "2999-09-07 09:57:47 Etc/GMT",
          "expires_date_pst" : "2999-09-06 17:57:47 America/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "32493661067000",
          "is_trial_period" : "false",
          "original_transaction_id" : "540000572398782",
          "purchase_date" : "2020-08-31 00:57:47 Etc/GMT",
          "product_id" : "com.globaldelight.iBoom.7DayFree1YearIntroPack",
          "original_purchase_date_pst" : "2020-08-30 17:57:47 America/Los_Angeles",
          "original_purchase_date_ms" : "1598835467000",
          "web_order_line_item_id" : "540000221708204",
          "expires_date_ms" : "1599440267000",
          "purchase_date_pst" : "2020-08-30 17:57:47 America/Los_Angeles",
          "original_purchase_date" : "2020-08-31 00:57:47 Etc/GMT"
        }
      ],
      "adam_id" : 1065511007,
      "receipt_creation_date_pst" : "2020-08-30 18:04:25 America/Los_Angeles",
      "request_date" : "2020-08-31 01:04:28 Etc/GMT",
      "request_date_pst" : "2020-08-30 18:04:28 America/Los_Angeles",
      "version_external_identifier" : 837265798,
      "request_date_ms" : "1598835868260",
      "original_purchase_date_pst" : "2020-08-30 16:55:37 America/Los_Angeles",
      "application_version" : "2.2.30003",
      "original_purchase_date_ms" : "1598831737000",
      "receipt_creation_date_ms" : "1598835865000",
      "original_application_version" : "2.2.30003",
      "download_id" : 94061272774804
    },
    "latest_receipt_info" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1598835467000",
        "expires_date" : "2999-09-07 09:57:47 Etc/GMT",
        "expires_date_pst" : "2999-09-06 17:57:47 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "540000572398782",
        "is_trial_period" : "false",
        "original_transaction_id" : "540000572398782",
        "purchase_date" : "2020-08-31 00:57:47 Etc/GMT",
        "product_id" : "com.globaldelight.iBoom.7DayFree1YearIntroPack",
        "original_purchase_date_pst" : "2020-08-30 17:57:47 America/Los_Angeles",
        "subscription_group_identifier" : "20461753",
        "original_purchase_date_ms" : "1598835467000",
        "web_order_line_item_id" : "540000221708204",
        "expires_date_ms" : "32493661067000",
        "purchase_date_pst" : "2020-08-30 17:57:47 America/Los_Angeles",
        "original_purchase_date" : "2020-08-31 00:57:47 Etc/GMT"
      }
    ],
    "pending_renewal_info" : [
      {
        "product_id" : "com.globaldelight.iBoom.7DayFree1YearIntroPack",
        "original_transaction_id" : "540000572398782",
        "auto_renew_product_id" : "com.globaldelight.iBoom.7DayFree1YearIntroPack",
        "auto_renew_status" : "1"
      }
    ]
  }
};

$done({body: JSON.stringify(obj)});

// Descriptions
