const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const helper = require('sendgrid').mail;
require('dotenv').config();
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 9000;
// const CLIENT_PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || 'http';
const HOSTNAME = process.env.HOST || 'localhost';
const UPLOAD_DIR = path.join(__dirname, 'uploads/');
const CORS = process.env.NODE_ENV === 'production' ? `${PROTOCOL}://${HOSTNAME}` : `*`;
const ENABLE_SEND_EMAILS = process.env.NODE_ENV === 'production' || process.env.ENABLE_SEND_EMAILS === 'true';

if (ENABLE_SEND_EMAILS) {
  console.info('Sending emails is enabled');
} else {
  console.info('Sending emails is disabled');
}

// This converts {a:1, b:2} into 'a=1&b=2'
const queryParams = obj =>
  Object.keys(obj)
    .map(key => [key, obj[key]]) // There is no Object.entries() in node 6
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join('&');

const wrikeMkFolder = name =>
  fetch(process.env.WRIKE_URL, {
    body: queryParams({
      title: name,
      description: 'folder description',
      shareds: process.env.WRIKE_SHARE_ID,
      project: process.env.WRIKE_OWNER_ID,
    }),
    method: 'post',
    headers: {
      Authorization: `bearer ${process.env.WRIKE_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(res => res.text());

const toEmail = new helper.Email('paulius.rimg1990@gmail.com');

const makeSgRequest = body =>
  sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: body.toJSON(),
  });

if (!fs.existsSync(UPLOAD_DIR)) {
  console.warn('==========================');
  console.warn('Creating uploads folder...');
  console.warn('==========================');
  fs.mkdirSync(UPLOAD_DIR);
}
console.info('======================================');
console.info(`Uploads will be saved in ${UPLOAD_DIR}`);
console.info('======================================');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/uploads', (req, res) => {
  const form = new formidable.IncomingForm();

  // In any case send the cors headers (even on error)
  res.header('Access-Control-Allow-Origin', CORS);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  form.parse(req);

  // The events we subscribe to in the form occur in the following order
  // field - multiple times
  // fileBegin then file - once per file
  // error - only if there was a parsing error
  // end - when all other events have been handled and the files have
  //       finished being written to the disk, this event happens even
  //       if there was an error

  form.on('fileBegin', (name, file) => {
    file.path = path.join(UPLOAD_DIR, file.name);
  });

  form.on('file', (name, file) => {
    console.log(`Uploaded ${file.name}`);
  });

  const fields = {};
  form.on('field', (name, value) => {
    fields[name] = value;
  });

  // Handle a possible error while parsing the request
  // We need a variable in this scope to hold whether there was an error
  // because we need to know that in a different callback
  let error = false;
  form.on('error', (err) => {
    error = true;
    console.log('Error while parsing request to /uploads: ', err);
    res
      .status(400) // Bad request
      .json({
        success: false,
        status: 'Error parsing the request',
      });
  });

  form.on('end', () => {
    // The end event is fired even if an error occurs, so we
    // need to prevent from sending a second response, otherwise the
    // server crashes
    if (error) return;
    console.log('Received fields:\n', JSON.stringify(fields, null, 2));


    // TODO: Validate fields


    // Here is a good place to send the emails since we have the fields
    // We don't want to actually send emails during testing since it
    // would send a test email on every single commit
    if (ENABLE_SEND_EMAILS) {
      const fromEmail = new helper.Email('test@example.com');
      const subject = 'Sending with SendGrid is Fun';
      const content = new helper.Content(
        'text/plain',
        'and easy to do anywhere, even with Node.js'
      );
      const mail = new helper.Mail(fromEmail, subject, toEmail, content);
      const request = makeSgRequest(mail);
      console.log('Sending email...');
      sg.API(request, (err, res) => {
        if (error) {
          console.log('Error response received');
        }
        console.log(res.statusCode);
        console.log(res.body);
        console.log(res.headers);
      });
    }

    wrikeMkFolder('test')
      .then(status => console.log(status))
      .catch(console.log);

    // Send the success response
    res
      .status(200)
      .json({ success: true, status: 'Form successfully submitted' });
  });
});

app.listen(PORT, _ =>
  console.info('============================'),
console.info(`Server listening on PORT ${PORT}...`),
console.info('============================'));
