// index.js

import CaesarCipher from './lab7.js';
import { setLogLevel, LOG_LEVELS } from './module.js';

// Встановлюємо рівень логування на рівень DEBUG
setLogLevel(LOG_LEVELS.DEBUG);

// Створюємо екземпляр шифру Цезаря зі зсувом 3
const cipher = new CaesarCipher(4);

// Повідомлення для шифрування та дешифрування
const message = "Hello, world!";

// Шифруємо повідомлення
const encryptedMessage = cipher.encrypt(message);
console.log("Зашифроване повідомлення:", encryptedMessage);

// Дешифруємо повідомлення
const decryptedMessage = cipher.decrypt(encryptedMessage);
console.log("Розшифроване повідомлення:", decryptedMessage);