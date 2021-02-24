let modifiedHeaders = $request.headers;
delete modifiedHeaders['X-FaceApp-ErrorCode'];
var modifiedStatus = 'HTTP/1.1 200 OK';
$done({status: modifiedStatus, headers : modifiedHeaders});