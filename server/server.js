const path = require('path');
const express = require('express');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');

//will parse the json form data sent to the server by the contact form
app.use(express.json());

//will serve all the files from the build folder
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3030, () => {
  console.log('server is on port 3030');
});
