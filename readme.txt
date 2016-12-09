Pusher.php has the code we want.
a request is built with json data for a post body.  The json is md5 hashed
and that hash is included in the params.
all params are hmac signed


