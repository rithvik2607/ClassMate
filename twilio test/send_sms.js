const accountSid = 'AC5178f9bda8dde22feafc2c5d058f319f';
const authToken = 'dece1dae6fe09cb80ee25b11fa398958';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13372430938',
     to: '+919712103373'
   })
  .then(message => console.log(message.sid));