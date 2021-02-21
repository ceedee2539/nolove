var obj = JSON.parse($response.body); 
obj["features"]=
[
    {
      "name" : "offline_sync",
      "enabled" : true,
      "plans" : [
        "mid_tier",
        "high_tier"
      ]
    },
    {
      "name" : "no_audio_ads",
      "enabled" : true,
      "plans" : [
        "mid_tier",
        "high_tier"
      ]
    },
    {
      "name" : "hq_audio",
      "enabled" : true,
      "plans" : [
        "mid_tier",
        "high_tier"
      ]
    },
    {
      "name" : "system_playlist_in_library",
      "enabled" : true,
      "plans" : [

      ]
    },
    {
      "name" : "ads_krux",
      "enabled" : true,
      "plans" : [

      ]
    },
    {
      "name" : "new_home",
      "enabled" : true,
      "plans" : [

      ]
    },
    {
      "name" : "spotlight",
      "enabled" : false,
      "plans" : [

      ]
    }
  ];
$done({body: JSON.stringify(obj)});

// soundcloud hq audio by KaoTD
