import pickle

o = {}
o['app_id'] = ''
o['key']=''
o['secret']=''

print repr(o)

pickle.dump( o, open( "server.p", "wb" ) )

o = pickle.load( open( "server.p", "rb" ) )
