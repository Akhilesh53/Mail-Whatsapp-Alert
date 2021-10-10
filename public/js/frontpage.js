var alert = require('alert');

var Usermail;
var password;
var number;

//=================================================================================

function setallinputvalues(email, pwd, num) {
   Usermail = email;
   password = pwd;
   number = num;

   console.log(`printing from the front page.js ${Usermail} ${number}  ${password}`);
}

function getnumber() {
   return number;
}

function getmail() {
   return Usermail;
}

function getpassword() {
   return password;
}


//=================================================================================

module.exports = { setallinputvalues, getmail, getpassword, getnumber }