//    REQUIRED LIBRARIES
//==========================================================================

var express = require('express')
var app = express()

var bodyParser = require('body-parser')

require('dotenv').config()

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');
var alert = require('alert');


//====================================
//  ENV variables
//=====================================
var port = process.env.PORT;

//===========================================================================
//  Static Files
//==========================================================================
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(bodyParser.urlencoded({ extended: true }))

//===========================================================================

//  Templating Engine
//===========================================================================
app.set('views', './src/views')
app.set('view engine', 'ejs')

//===========================================================================


// Get the front page

app.get('/', function (req, res) {
  res.render('frontpage');
})

//Get required files 

var frontpage = require('./public/js/frontpage');
var server = require('./public/js/server');
var sendMessage = require('./public/js/sendMessage');


var num; var mail; var pwd;


//Retreive values submitted in form

app.post('/', async function (req, res) {

  frontpage.setallinputvalues(req.body.email, req.body.password, req.body.phone)

  num = frontpage.getnumber();
  console.log(req.body.email + ' ' + req.body.password + ' ' + req.body.phone + ' ' + num);

  await sendMessage.send_message("Thanks for joining. Please write *CHECK* to see all unread emails", num);

  res.send("Checkout your Whatsapp");

})


//CHECK FOR MESSAGES GETTING FROM WHATSAPP

app.post('/whatsapp', async (req, res) => {

  console.log(req.body);

  var mssg = req.body.Body
  console.log(mssg);

  if (mssg == "hi" || mssg == "HI" || mssg == "Hi" || mssg == "hI") {
    await sendMessage.send_message('Hi. ', num);

  } else if (mssg == "CHECK") {
    mail = frontpage.getmail();
    pwd = frontpage.getpassword();

    server.startserver(mail, pwd);
  }
  else {
    await sendMessage.send_message('Write proper command : Please write *CHECK* to see all unread emails', num);
  }

});





//=============================================================================
//   Listening to port
http.createServer(app).listen(5000, () => {
  console.log('Express server listening on port 5000');
});

//=============================================================================