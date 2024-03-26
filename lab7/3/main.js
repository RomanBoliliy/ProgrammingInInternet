// Імпортуємо бібліотеку CryptoJS
import CryptoJS from './node_modules/crypto-js/crypto-js.js';

// Задаємо ключ для шифрування і дешифрування
const secretKey = "ThisIsASecretKey123";

// Повідомлення для шифрування
const message = "Hello, world!";

// Шифруємо повідомлення
const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log("Зашифроване повідомлення:", encryptedMessage);

// Дешифруємо повідомлення
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8);
console.log("Розшифроване повідомлення:", decryptedMessage);