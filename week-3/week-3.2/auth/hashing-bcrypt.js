const bcrypt = require('bcrypt');

// Hashing a password
const plainPassword = 'user123';
bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed  password:', hash);

  // Verify a password
  bcrypt.compare('user123', hash, (err, result) => {
    if (err) throw err;
    console.log('password Match:', result);
  });
});
