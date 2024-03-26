
import { log, LOG_LEVELS } from './module.js';

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(message) {
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      // Застосовуємо шифр Цезаря, додавши зсув до кожної кодової точки
      charCode = (charCode - 32 + this.shift) % 95 + 32;
      encryptedMessage += String.fromCharCode(charCode);
    }
    return encryptedMessage;
  }

  decrypt(encryptedMessage) {
    let decryptedMessage = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      // Застосовуємо зворотній шифр Цезаря, віднімаючи зсув від кожної кодової точки
      charCode = (charCode - 32 - this.shift + 95) % 95 + 32;
      decryptedMessage += String.fromCharCode(charCode);
    }
    
    log(LOG_LEVELS.INFO, `Розшифроване повідомлення: ${decryptedMessage}`);
    
    return decryptedMessage;
  }
}

export default CaesarCipher;