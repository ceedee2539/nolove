var obj = JSON.parse($response.body);

obj =
{
  "level" : 10,
  "expiry_milliseconds" : 4077569306000,
  "expiry_timestamp" : 4077569306,
  "start_timestamp" : 4077569306,
  "grant_type" : "ADSK_GRANTED_USERS_AUTODESK_EDUCATION_BUNDLE"
};
$done({body: JSON.stringify(obj)});
