const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(404).end();
  } else {
    const id = parseInt(req.params.id);
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  let username = ''
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome :${username}`);
});


app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;