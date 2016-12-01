import pusherclient
import sys
import time
import pickle

# Add a logging handler so we can see the raw communication data
import logging
root = logging.getLogger()
root.setLevel(logging.INFO)
ch = logging.StreamHandler(sys.stdout)
root.addHandler(ch)

global pusher

def callback(data):
    print "in cb with", data

# We can't subscribe until we've connected, so we use a callback handler
# to subscribe when able
def connect_handler(data):
    channel = pusher.subscribe('test_channel')
    channel.bind('my_event', callback)


o = pickle.load( open( "client.p", "rb" ) )
pusher = pusherclient.Pusher(o['key'])
pusher.connection.bind('pusher:connection_established', connect_handler)
pusher.connect()

while True:
    # Do other things in the meantime here...
    time.sleep(1)
