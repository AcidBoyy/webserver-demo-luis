const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        .container {
          text-align: center;
          margin-top: 20px;
        }
        .title {
          font-size: 24px;
          color: #3366cc;
        }
        .message {
          font-size: 18px;
          color: #ff6600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="title">Herzlich Willkommen zur Wohnungsbesichtigung!</h1>
        <p class="message">De Nathan wird bei der Wohnungsbesichtigung den Vermieter beeindrucken!</p>
        <p class="message">Vielen Dank, dass Sie unsere Website besuchen.</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/port', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        .container {
          text-align: center;
          margin-top: 20px;
        }
        .title {
          font-size: 24px;
          color: #3366cc;
        }
        .message {
          font-size: 18px;
          color: #ff6600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="title">Aktuell verwendeter Port</h1>
        <p class="message">Der verwendete Port ist ${port}</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Die Beispielanwendung lauscht auf Port ${port}`);
});

