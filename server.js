const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

const PORT = process.env.PORT || 5000;
const UPLOAD_DIR = path.join(__dirname, 'uploads/');
const app = express();

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

  form.parse(req);

  form.on('fileBegin', (name, file) => {
    file.path = `${UPLOAD_DIR}${file.name}`;
  });

  form.on('file', (name, file) => {
    console.log(`Uploaded ${file.name}`);
  });

  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.status(200).json({
    success: true,
    status: 'Form successfully submitted',
  });
});

app.listen(PORT, _ =>
  console.info('============================'),
console.info(`Server listening on PORT ${PORT}...`),
console.info('============================'));