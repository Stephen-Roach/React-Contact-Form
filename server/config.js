const nodemailer = require('nodemailer');
const dotenv = require('dontenv');
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

module.exports = transporter;
