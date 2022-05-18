var nodemailer = require('nodemailer');
var path = require('path');
var favicon = require('serve-favicon');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/views/index.html');
});

app.post('/mandarMail', function (req, res) {
    mensaje = req.body
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'prueba.lgrdonotreply@gmail.com',
          pass: 'nfyxdavcoyqnwbrn'
      }
      });

      var mailOptions = {
        from: mensaje["mail"],
        to: "lucasgrassoramos@gmail.com",
        subject: mensaje["asunto"],
        text: mensaje["msg"]
      };

      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
      });
    });
  
app.listen(port, () => {
  console.log(port);
});

