var obj = JSON.parse($response.body)
obj = {"transaction_id":"540000575405940","msg":"验证成功","current_date":"2020-09-06 03:09:47","isRepeatBind":"0","isBlacklist":"0","original_transaction_id":"540000575405940","expires_date":"2099-09-09 03:09:45 Etc/GMT","product_id":"vip_privilege_monthly_3","is_trial_period":"true","purchase_date":"2020-09-06 03:09:45 Etc/GMT","cancellation_date":"","status":"0"}
$done({body:JSON.stringify(obj)})
