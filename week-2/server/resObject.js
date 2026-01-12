const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api/data', (req, res) => {
  const data = { message: 'This is a JSON response.' };
  res.json(data);
});

app.get('/html', (req, res) => {
  const htmlContent = '<h1>This is an HTML response</h1>';
  res.send(htmlContent);
});

app.get('/redirect', (req, res) => {
  res.redirect('/https://yean.me/link-in-bio/');
});

const path = require('path');

app.get('/file', (req, res) => {
  // Testing This Handlr
  console.log('worked');
  const filePath = path.join(__dirname, 'files', 'example.txt');
});

app.get('/custom-header', (req, res) => {
  res.set('X-Custom-Header', 'Custom Header Value');
  res.send('Response with a custom header');
});

app.listen(PORT, () => {
  console.log('Server running')
});
