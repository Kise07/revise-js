// const crypto = require('crypto');

// // Encryption
// const dataToEncrypt = 'Sensitive information';
// const encryptionKey = 'secretKey';
// const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
// let encryptedData = cipher.update(dataToEncrypt, 'utf-8', 'hex');
// encryptedData += cipher.final('hex');
// console.log('Encrypted Data:', encryptedData);
//
// // Decryption
// const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
// let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
// decryptedData += decipher.final('utf-8');
// console.log('Decrypted Data:', decryptedData);

// ---- Fixed + Modern version (NODE 23) ----
const crypto = require('crypto');

// Data
const dataToEncrypt = 'Sensitive information';

// Key & IV
const algorithm = 'aes-256-cbc';
const key = crypto.createHash('sha256').update('secretKey').digest(); // 32 bytes
const iv = crypto.randomBytes(16); // 16 bytes for AES-CBC

// ENCRYPT
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(dataToEncrypt, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted);
console.log('IV:', iv.toString('hex'));

// DECRYPT
const decipher = crypto.createDecipheriv(
  algorithm,
  key,
  Buffer.from(iv.toString('hex'), 'hex')
);

let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted);
