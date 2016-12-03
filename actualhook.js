// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
module['exports'] = function helloWorld (hook) {
  
  
  var request = require('request');

  curl -H 'Content-Type: application/json' -d '{"data":"{\"message\":\"hello world\"}","name":"my_event","channel":"test_channel"}' \
"https://api.pusherapp.com/apps/275928/events?"\
"body_md5=8a3501faef6636ca9a5ebbe6f31b5409&"\
"auth_version=1.0&"\
"auth_key=454f45ebf6880d64549c&"\
"auth_timestamp=1480757036&"\
"auth_signature=66e3194f727e79004fd57e142b2464f57c71903b421e6c9cef8876e5240ab82e&"


 url = "https://api.pusherapp.com/apps/275928/events?body_md5=8a3501faef6636ca9a5ebbe6f31b5409&auth_version=1.0&auth_key=454f45ebf6880d64549c&auth_timestamp=1480757036&auth_signature=66e3194f727e79004fd57e142b2464f57c71903b421e6c9cef8876e5240ab82e&";

  
  
var options = {
  url: 'http://requestb.in/1mqus791',
   headers: {
    'Content-Type': 'application/json',
  }
  

};
  
  

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    //var info = JSON.parse(body);
    //console.log(info.stargazers_count + " Stars");
    //console.log(info.forks_count + " Forks");
  }
  
  
  
  
  
}

request(options, callback);
  
  
  
  // hook.req is a Node.js http.IncomingMessage
  var host = hook.req.host;
  // hook.res is a Node.js httpServer.ServerResponse
  // Respond to the request with a simple string
  hook.res.end(host + ' says, "Hello world!"');
  
  
};

