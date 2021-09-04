const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'developertester21@gmail.com',
    pass: 'Java!123',
  },
});

module.exports = transporter;
