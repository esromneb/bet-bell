import pusher
import pickle


o = pickle.load( open( "server.p", "rb" ) )
pusher_client = pusher.Pusher(
  app_id=o['app_id'],
  key=o['key'],
  secret=o['secret'],
  ssl=True
)

pusher_client.trigger('test_channel', 'my_event', {'message': 'hello world'})

