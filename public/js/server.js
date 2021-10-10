var frontpage = require('./frontpage');
var sendMessage = require('./sendMessage')
//==========================================================================

var Imap = require("imap");
var MailParser = require("mailparser").MailParser;
var Promise = require("bluebird");
Promise.longStackTraces();
var inspect = require('util').inspect;
var alert = require('alert');

//=============================================================================

//FUNCTION TO FETECH MAILS
//=============================================================================

function startserver(mail, pwd) {

  //SETTING UP IMAP CONFIGURATION

  var imapConfig = {
    user: mail,
    password: pwd,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },

  };

  var imap = new Imap(imapConfig);
  Promise.promisifyAll(imap);

  //Getting number to which message been sent 
  var num = frontpage.getnumber();

  imap.connect(); // connect to Imap

  imap.once("ready", function () {  // Once Connected to mail host

    imap.openBox("INBOX", false, function (err, mailBox) {  //Open Inbox

      if (err) {
        console.log(err);
        alert(err);
        sendMessage.send_message(err, num);
      }

      imap.search(["UNSEEN", ["SINCE", new Date()]], function (err, results) {  //Search for Headers
        if (!results || !results.length) {
          console.log("No unread mails");
          sendMessage.send_message('No unread mails...', num);
          imap.end();
          return;
        }


        results.forEach(result => {  //For each unread mail

          imap.setFlags(result, ['\\Seen'], function (err) {  // Mark fetched mail as read
            if (!err) {
              console.log("marked as read");
            } else {
              console.log(JSON.stringify(err, null, 2));
            }
          });

          var f = imap.fetch(result, {       //Fetch respective Data from mail  
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE TEXT)',
            struct: true
          });


          f.on('message', function (msg, seqno) {

            console.log('Message #%d', seqno);
            var prefix = '(#' + seqno + ') ';

            msg.on('body', function (stream, info) {
              var buffer = '';

              stream.on('data', function (chunk) {
                buffer += chunk.toString('utf8');
              });

              stream.once('end', function () {
                console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));

                var mssg_to_send = inspect(Imap.parseHeader(buffer));

                //Write send message function here
                sendMessage.send_message(mssg_to_send.substr(1, mssg_to_send.length - 2), num);

              });

            })

          })

          f.once('error', function (err) {
            console.log('Fetch error: ' + err);
            alert(err);
            sendMessage.send_message(err, num);
          });

          f.once('end', function () {
            console.log('Fetched message Properly');
          });

        })

      });

    })

  })

  sendMessage.send_message('All unread/ unseen messages are fetched sucesfully...', num);

  imap.once("error", function (err) {
    console.error("Connection error: " + err.stack);
    alert(err);
    sendMessage.send_message(`Connection error ${err}`, num);
  });

}


module.exports = { startserver }

