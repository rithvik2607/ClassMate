import pymongo
import time
import urllib

from twilio.rest import Client
from datetime import datetime

from dotenv import dotenv_values

config = dotenv_values(".env")

client = Client(config["account_sid"], config["auth_token"])

while 1:

    myclient = pymongo.MongoClient("mongodb+srv://rithvik2607:"+urllib.parse.quote_plus("Ricky@2001")+"@cfg21.fd89o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    mydb = myclient.myFirstDatabase

    mycol = mydb["messages"]

    for i in mycol.find():
        timestamp = time.time()
        dt_object = datetime.fromtimestamp(timestamp)
        if i["time"] < dt_object:
            
            for y in i["contacts"]:
                print(y)
                message = client.messages.create(
                to="+91"+ y, 
                from_="+13372430938",
                body="Reminder: Your class is under 15 mins."
                )
            
            myquery = { "time": i["time"] }
            mycol.delete_one(myquery)

    time.sleep(120)