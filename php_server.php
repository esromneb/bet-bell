<?php
  require('Pusher.php');

  $options = array(
    'encrypted' => true
  );
  $pusher = new Pusher(
    '', // auth_key 
    '', // secret
    '',               // app_id
    $options
  );

  $data['message'] = 'hello world';
  $pusher->trigger('my-channel', 'my-event', $data);
?>

