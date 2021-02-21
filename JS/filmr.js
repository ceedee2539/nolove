var obj = JSON.parse($response.body)
obj = {
  "is_subscription_upgraded" : true,
  "auto_renew_product_id" : "com.filmr.year",
  "is_auto_renew_active" : true,
  "last_subscribed_product" : "com.filmr.year",
  "is_subscription_active" : true,
  "has_already_renewed" : true,
  "is_in_billing_retry_period" : false,
  "subscribed_offer_ids" : [

  ],
  "is_prod_environment" : true,
  "original_transaction_id" : "700000548311951",
  "is_promo_offer_elegible" : false,
  "original_purchase_date_ms" : "1599099222000",
  "is_subscription_canceled" : false,
  "expires_date_ms" : "4092346814000",
  "is_intro_offer_elegible" : false
}
$done({body:JSON.stringify(obj)})

