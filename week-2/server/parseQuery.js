const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
  const userId = req.query.id;
  const name = req.query.name;

  const user = {
    id: userId,
    name: name,
  };

  res.json({
    user
  });
})

app.listen(port, () => {
  console.log('Server running');
});
