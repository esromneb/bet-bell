 var request = require('request');



//curl -H 'Content-Type: application/json' -d '{"data":"{\"message\":\"hello world\"}","name":"my_event","channel":"test_channel"}' \
//https://api.pusherapp.com/apps/275928/events?body_md5=8a3501faef6636ca9a5ebbe6f31b5409&auth_version=1.0&auth_key=454f45ebf6880d64549c&auth_timestamp=1480587313&"auth_signature=5cb0b5b4149ee9e663eca231331d582ec654506803610e3001716b95322220ec&
//{"data":"{\"message\":\"hello world\"}","name":"my_event","channel":"test_channel"}


var options = {
  uri: 'https://api.pusherapp.com/apps/275928/events?body_md5=8a3501faef6636ca9a5ebbe6f31b5409&auth_version=1.0&auth_key=454f45ebf6880d64549c&auth_timestamp=1480587313&"auth_signature=5cb0b5b4149ee9e663eca231331d582ec654506803610e3001716b95322220ec&',
  method: 'GET',
  json: {
    "data":{"message":"hello world","name":"my_event","channel":"test_channel"}
  }
};

request(options, function (error, response, body) {
console.log(response);
  if (!error && response.statusCode == 200) {
    console.log(body.id) // Print the shortened url.
  }
});

