import json
import io


def f1():
  with open('data/itemInfo_EN.json') as f:
    dataen = json.load(f)

  dataen = list(dataen['recipe'].keys())

  print(dataen)


  with open('data/itemInfo_CN.json') as f:
    datacn = json.load(f)

  datacn = list(datacn['recipes'].keys())

  print(datacn)

  newdata = {}
  for i in range(len(datacn)):
      newdata[dataen[i]] = datacn[i]

  print(newdata)

  # Serializing json  
  json_object = json.dumps(newdata, indent = 4, ensure_ascii=False) 
    
  # Writing to sample.json 
  with open("data/est.json", "w") as outfile: 
      outfile.write(json_object) 


with open('data/trans.json') as f:
  datain = json.load(f)

newdata = {}
keys = list(datain.keys())
for key in keys:
  new = {}
  new['cn'] = datain[key]
  new['en'] = (key.replace('_',' ')).title()
  newdata[key] = new
print(newdata)
json_object = json.dumps(newdata, indent = 4, ensure_ascii=False) 
with open("data/trans.json", "w") as outfile: 
    outfile.write(json_object) 