const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const helper = require('sendgrid').mail;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;
// const CLIENT_PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || 'http';
const HOSTNAME = process.env.HOST || 'localhost';
const UPLOAD_DIR = path.join(__dirname, 'uploads/');
const CORS =
  process.env.NODE_ENV === 'production' ? `${PROTOCOL}://${HOSTNAME}` : `*`;

const fromEmail = new helper.Email('test@example.com');
const toEmail = new helper.Email('paulius.rimg1990@gmail.com');
const subject = 'Sending with SendGrid is Fun';
const content = new helper.Content(
  'text/plain',
  'and easy to do anywhere, even with Node.js'
);
const mail = new helper.Mail(fromEmail, subject, toEmail, content);

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
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

  form.parse(req).on('field', (field, value) => {
    console.log(field, value)
  });

  form.on('fileBegin', (name, file) => {
    file.path = `${UPLOAD_DIR}${file.name}`;
  });

  form.on('file', (name, file) => {
    console.log(`Uploaded ${file.name}`);
  });

  res.header('Access-Control-Allow-Origin', CORS);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.status(200).json({
    success: true,
    status: 'Form successfully submitted',
  });

  sg.API(request, (err, res) => {
    if (err) {
      console.log('Error response received');
    }
    console.log(res.statusCode);
    console.log(res.body);
    console.log(res.headers);
  });
});

app.listen(PORT, _ =>
  console.info('============================'),
console.info(`Server listening on PORT ${PORT}...`),
console.info('============================'));
