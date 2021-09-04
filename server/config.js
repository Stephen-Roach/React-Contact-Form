const nodemailer = require('nodemailer');
const dontenv = require('dontenv');
dontenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

module.exports = transporter;
