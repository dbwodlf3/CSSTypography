import os
a = __file__
print( "%s %s" % (__file__, type(__file__)))
print("%s %s" % (__name__, type(__name__)))

print(os.path.abspath(__file__))

onlyFiles = [f for f in os.listdir(os.path.abspath("")) if os.path.isfile(os.path.join(os.path.abspath(""),f))]

print(onlyFiles)