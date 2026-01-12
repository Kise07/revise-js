const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Yo, ${name}`);
})

app.listen(PORT, () => {
  console.log('Server running');
})
