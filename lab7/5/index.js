// Імпортуємо функції з модуля random.js
import { generateRandomInt, generateRandomIntArray, getRandomText } from './lab7.js';

// Використовуємо функції для генерації випадкових даних
console.log("Випадкове ціле число:", generateRandomInt(1, 100));
console.log("Масив випадкових цілих чисел:", generateRandomIntArray(5, 1, 100));
console.log("Випадковий текст:", getRandomText(10));