const express = require('express');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const sgMail = require('@sendgrid/mail');

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send_email/", function(req, res) {

  res.set("Content-Type", "application/json");

	// const msg = {
	//   to: 'l.alonsosolano@gmail.com',
	//   from: 'no-reply@evanston-wicker.com',
	//   subject: 'Sending with Twilio SendGrid is Fun',
	//   text: 'and easy to do anywhere, even with Node.js',
	//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	// }

	sgMail.send(req.body).catch((error) => {
		console.log(error)
	})

  res.send("OK")

});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});