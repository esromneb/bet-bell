import RPi.GPIO as G
import time

G.setmode(G.BCM)

G.setup(4, G.OUT)
#time.sleep(0.2)

pattern = [0,0,0,1,1,0,0,0,1,1,0,0,0]

for i in pattern:
    G.output(4, 0)
    time.sleep(0.029)
    G.output(4,1)
    if i:
        time.sleep(0.2)
    else:
        time.sleep(0.4)
print "low"
