const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('get');
});

app.post('/add', (req, res) => {
  res.send('post');
});

app.put('/put/:id', (req, res) => {
  res.send('put');
});

app.delete('/delete/:id', (req, res) => {
  res.send('delete');
});

app.listen(port, () => {
  console.log('server');
});

