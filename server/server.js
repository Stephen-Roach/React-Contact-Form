const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dontenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');

//will parse the json form data sent to the server by the contact form
app.use(express.json());

//will serve all the files from the build folder
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, //sender address
      to: req.body.email, //list of receivers
      subject: req.body.subject, //subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
      <li>Name:${req.body.name}</li>
      <li>Email:${req.body.email}</li>
      <li>Subject:${req.body.subject}</li>
      <li>Message:${req.body.message}</li>
      </ul>
      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later.',
        });
      } else {
        res.send({
          success: true,
          message:
            'Thanks for contacting us. We will be getting back to you shortly.',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later.',
    });
  }
});

app.listen(3030, () => {
  console.log('server is on port 3030');
});
