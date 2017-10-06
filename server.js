/* eslint-disable */
const express = require('express');
const path = require('path');
const formidable = require('formidable');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/uploads', (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', (name, file) => {
    file.path = `${__dirname}/uploads/${file.name}`;
  });

  form.on('file', (name, file) => {
    console.log(`Uploaded ${file.name}`);
  });

  res.json({ success: true, status: 'Form successfully﻿ submitted' });
});

app.listen(5000);

console.log('====================');
console.log('Server running on port 5000');
console.log('====================');
