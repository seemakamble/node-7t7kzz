// run `node index.js` in the terminal
const http = require('http');
const nodemailer = require('nodemailer');
console.log(`Hello Node.js v${process.versions.node}!`);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nareshsit7@gmail.com',
    pass: 'f1gfhgm23nbcfgfdgvx54352',
  },
});
// Created nodemailer
const options = {
  from: 'nareshsit7@gmail.com',
  to: 'nareshbjava7@gmail.com',
  subject: 'Testing mail from express',
  text: 'This is text mail',
};

http
  .createServer((req, res) => {
    res.write('hellooo');
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        res.write('Error');
      } else {
        res.write('mail is sent');
      }
      res.end();
    });
    // res.end();
  })
  .listen(4040, () => console.log('server is running....'));
