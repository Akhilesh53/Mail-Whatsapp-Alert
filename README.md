# Mail-Whatsapp-Alert

This is a Javascript Project which will fetch all the mail notifications and send it to **WhatsApp**.

Load the respective code in your code editor and run it on your local host.

**Framework** => Express, EJS, Node JS. <br/>
**Backend Language** => Javascript. <br/> 
**FrontEnd** => EJS. <br/>
**Software Used for Sending and Receiving messages from WhatsApp** => Twilio WhatsApp Sandbox. <br/>


# Step by step Explainaton how to make changes and run it on your localhost.

# 1 Get your Twilio AuthId and AuthToken

Go to Twilio Console, Create a new account and check out functionality to Send and Receive messages from Whatsapp.

Use the link to see trail.

https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Flearn%3Fx-target-region%3Dus1

Check out for your personal twilio whatsapp mobile number. Save the Twilio Mobile Number and send your respective code to activate the  Twilio SandBox.

![WhatsApp Image 2021-10-10 at 14 20 10](https://user-images.githubusercontent.com/64018679/136689121-bff13f8e-e91a-4daa-9feb-678b2d6b9563.jpg)

Start your WhatsApp service using Twilio.

Checkout for your AuthToken and AuthId and put it in .env file.

![image](https://user-images.githubusercontent.com/64018679/136689237-c626c480-0fbf-4ad9-8c65-5af8b5b14094.png)

# 2 Set up your Twilio Console to Receive Messages from WhatsApp

For receiving messages from WhatsApp, Do the following

1) Download ngrok from https://ngrok.com/download
2) run ngrok htpp 5000 //Your port Number
3) Wil see a screen like this

![image](https://user-images.githubusercontent.com/64018679/136689365-11787843-fdcf-4703-bd3d-e131e0931879.png)

Copy the Forwarding link (till io) and Paste it in Twilio console at https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Fsandbox%3Fx-target-region%3Dus1

*Paste it like this link* https://136e-2405-201-5507-a80b-6928-503f-77db-56b1.ngrok.io/whatsapp
 
 ![image](https://user-images.githubusercontent.com/64018679/136689465-2910effa-af29-4b1a-afb6-796d2b909528.png)
 
 By saving all the credentials, you can receive message from WhatsApp and respond Accordingly.
 
 If you donot make ngrok server to run, you will not receive messages from WhatsApp. 
 
 # 3 Fetch mails Using IMAP
 
SetUp you GMAIL For Creating Imap connection

1. On your computer, open Gmail.
2. In the top right, click Settings .
3. Click Settings.
4. Click the Forwarding and POP/IMAP tab.
5. In the “IMAP access” section, select Enable IMAP.
6. Click Save Changes

 **NOTE**: In Gmail Settings make your gmail account **TURN ON** for Less Secure Apps. (Otherwise you will get Error)
 
 *You can use the following links to go through the code and learn more about it*.  <br/>
 
 https://excellencetechnologies.in/blog/receive-and-send-email-from-email-server-with-node-js/   <br/>
 https://dev.to/mesadhan/manage-your-re-mail-using-imap-2p18    <br/>  
 https://www.codegrepper.com/code-examples/javascript/read+email+using+node+js   <br/>
 https://www.zeolearn.com/magazine/sending-and-receiving-emails-using-nodejs   <br/>
 
 # 4 Demo of Application made
 
 1) Run your Application on Localhost
 
 ![image](https://user-images.githubusercontent.com/64018679/136690012-733fa682-a0b2-422f-baf4-a1090a8cd789.png)
 
 2) Fill your Credentials accordingly and Submit it.
 
 **NOTE :** Please Enter your Mobile Number with **Country Code** as in below Pic. 

 ![image](https://user-images.githubusercontent.com/64018679/136690052-7bccd9eb-5495-40f2-bcd8-a26727cd69db.png)

 3) On submitting your Credentials, you will get a message on your Submitted WhatsApp Number

*It will take some time, but if the message doesnot come, you have entered wrong mobile number or in wrong format*
 
 ![image](https://user-images.githubusercontent.com/64018679/136690238-7973285f-cb2a-4152-ad33-8c682dbd8f6b.png)

4) On writing the keyword CHECK, it will fetch all unread/ unseen mails from your respective mail id.
 
 ![image](https://user-images.githubusercontent.com/64018679/136690305-7da2c0e9-a18b-4f26-bb3b-d130e6ad15a8.png)

*On writing the wrong Email Credentials, you will get a message for Invalid Credentials.
 
 
 **UPDATES ARE ALWAYS WELCOMED** <br/>
 
 You can add more new features to retreive whole message and reply the mail from whatsapp too.
 
 
 
 
 

