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
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send_email/", function(req, res) {

  res.set("Content-Type", "application/json");

	sgMail.send(req.body).catch((error) => {
		console.log(error)
	})

  res.send("OK")

});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = app.listen(port, function() {
  console.log('Server is up!');
  console.log('Listening on port %d', server.address().port);
});
