const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const textContent = [];

app.post('/add-content', (req, res) => {
  const newContent = req.body.content;

  if (!newContent) {
    return res.status(400).json({
      error: 'Content required'
    });
  }

  textContent.push(newContent);

  res.status(201).json({
    message: 'Added'
  });
});

app.listen(PORT, () => {
  console.log('Server running');
})
