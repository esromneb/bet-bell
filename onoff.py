import RPi.GPIO as G
import time

G.setmode(G.BCM)

G.setup(4, G.OUT)
#time.sleep(0.2)
for i in range(3):
    G.output(4, 0)
    time.sleep(0.029)
    G.output(4,1)
    time.sleep(0.3)
print "low"
