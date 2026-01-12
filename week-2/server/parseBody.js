const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.post('/form', (req, res) => {
  const formData = req.body;
  res.json({ recivedData: formData });
});

app.post('/json', (req, res) => {
  const jsonData = req.body;
  res.json({ recivedData: jsonData });
});

app.listen(port, () => {
  console.log('Server');
});
