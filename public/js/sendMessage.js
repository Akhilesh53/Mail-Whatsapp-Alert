require('dotenv').config()
var alert = require('alert');

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function getaccountid()
{
      return accountSid;
}
function getauthtoken()
{
      return authToken;
}


const send_message = async function(message,number){
    
      try {
            client.messages
            .create({
               from: 'whatsapp:+14155238886',
               body: message,
               to: `whatsapp:${number}`
             })
            .then(message => console.log(message.sid)); 
      } catch (error) {
            console.log(`Error at --> ${error}`);
            alert(error);
      }
    
}

module.exports = { send_message,getaccountid,getauthtoken}