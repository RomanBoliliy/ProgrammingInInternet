// Генерує випадкове ціле число в заданому діапазоні
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Генерує масив випадкових цілих чисел заданої довжини та діапазону
  function getRandomIntArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(getRandomInt(min, max));
    }
    return randomArray;
  }
  
  // Генерує випадковий текстовий фрагмент
  function getRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  }
  
  // Експортуємо функцію для генерації випадкового цілого числа
  export function generateRandomInt(min, max) {
    return getRandomInt(min, max);
  }
  
  // Експортуємо функцію для генерації масиву випадкових цілих чисел
  export const generateRandomIntArray = getRandomIntArray;
  
  // Експортуємо функцію для генерації випадкового текстового фрагменту
  export { getRandomText };