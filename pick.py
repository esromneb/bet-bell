import pickle

o = {}
o['app_id'] = ''
o['key']=''
o['secret']=''

assert len(o['app_id']), "edit values before running..."

pickle.dump( o, open( "server.p", "wb" ) )


o = {}
o['key'] = '' # same as above

pickle.dump( o, open( "client.p", "wb" ) )


o = pickle.load( open( "server.p", "rb" ) )
o = pickle.load( open( "client.p", "rb" ) )
