var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if(!obj['leaderboard']){
 obj['leaderboard'] = {}
}
if(!obj['leaderboard']['active_contest']){
 obj['leaderboard']['active_contest'] = {}
}
obj['leaderboard']['active_contest']['contest_end'] = '2099-09-14T00:30:00Z'
obj['leaderboard']['active_contest']['contest_start'] = '2020-10-05T00:00:00Z'
obj['leaderboard']['active_contest']['contest_state'] = 'ACTIVE'
obj['leaderboard']['active_contest']['registration_end'] = '2099-09-13T00:30:00Z'
obj['leaderboard']['active_contest']['registration_state'] = 'OPEN'



body = JSON.stringify(obj);
$done({body});
