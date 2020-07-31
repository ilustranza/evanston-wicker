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
app.enable('trust proxy');

app.use (function (req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});

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

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});


// app.listen(port, () => {
//    console.log('Server is up!');
// });