Pusher.php has the code we want.
a request is built with json data for a post body.  The json is md5 hashed
and that hash is included in the params.
all params are hmac signed


Terms:
Pusher - Server: this side, via a webhook, sends a request into puhser
Pusher - Client: this side holds open a websocket and is notified






Runables MAC ONLY:
php_server.php loads and sends a message
php php_server.php


IP ONLY:
python client_example.py  loads and waits with websocket and is notified


myhash.js-
load 2 libraries at the top
then write a fn that takes a body, and does a POST to a url with params



#############
http://www.freeformatter.com/hmac-generator.html#ad-output
https://javascript-minifier.com/

