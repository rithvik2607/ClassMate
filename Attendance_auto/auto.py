import pymongo
import time
import urllib
import fpdf as FPDF

import base64

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import (Mail, Attachment, FileContent, FileName, FileType, Disposition)

from datetime import datetime, timedelta

from dotenv import dotenv_values

from python_http_client.exceptions import HTTPError


config = dotenv_values(".env")


while 1:

    myclient = pymongo.MongoClient("mongodb+srv://rithvik2607:"+urllib.parse.quote_plus("Ricky@2001")+"@cfg21.fd89o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    mydb = myclient.myFirstDatabase

    mycol = mydb["attendance"]

    for i in mycol.find():
        a = datetime.now() + timedelta(hours = -4.5 )
        print(i["time"], a)
        if i["time"] < a:

            data = ""
            for y in i["students"]:
                data = data + "\n" + y

            #print(data)
            
            message = Mail(
                from_email='muditsinghal2002@gmail.com',
                to_emails=i["email"],
                subject="Here's your attendance for the meet id " + i["meetId"],
                html_content='<strong>With love, from CFG!</strong>'
            )

            data_bytes = data.encode('ascii')
            encoded_file = base64.b64encode(data_bytes).decode('ascii')
            #print(encoded_file)
            attachedFile = Attachment(
                FileContent(encoded_file),
                FileName('attachment.txt'),
                FileType('text/plain'),
                Disposition('attachment')
            )
            message.attachment = attachedFile

            sg = SendGridAPIClient(config["SENDGRID_API_KEY"])
            try:
                response = sg.send(message)
            except HTTPError as e:
                print(e.to_dict)
            print(response.status_code, response.body, response.headers)

            myquery = { "time": i["time"] }
            mycol.delete_one(myquery)

    time.sleep(3600)