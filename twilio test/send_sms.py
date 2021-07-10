from twilio.rest import Client
import pandas as pd

loc = ("C:\\Users\\mudit\\Documents\\JPMC CFG\\data_dummy_cfg.xlsx")

df = pd.read_excel(loc)
# print(str(df["Phone Number"][4]))

# Your Account SID from twilio.com/console
account_sid = "AC5178f9bda8dde22feafc2c5d058f319f"
# Your Auth Token from twilio.com/console
auth_token  = "dece1dae6fe09cb80ee25b11fa398958"

client = Client(account_sid, auth_token)

for i in range(0,5):
    message = client.messages.create(
        to="+91"+str(df["Phone Number"][i]), 
        from_="+13372430938",
        body="test cfg"+str(df["Name"][i]))

print("working")