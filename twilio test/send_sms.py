from twilio.rest import Client
import xlrd

loc = ("C:\\Users\\mudit\\Documents\\JPMC CFG\\data_dummy_cfg.xlsx")

wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)

# Your Account SID from twilio.com/console
account_sid = "AC5178f9bda8dde22feafc2c5d058f319f"
# Your Auth Token from twilio.com/console
auth_token  = "dece1dae6fe09cb80ee25b11fa398958"

client = Client(account_sid, auth_token)

for i in range(1,5):
    message = client.messages.create(
        to="+91"+sheet.cell_value(1,i), 
        from_="+13372430938",
        body="test cfg"+sheet.cell_value(0,i))

print("work")