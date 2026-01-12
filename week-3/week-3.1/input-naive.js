const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || username.length < 3 ||
    !password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  res.json({ success: true });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
