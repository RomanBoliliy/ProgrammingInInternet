// module.js

// Константи рівнів логування
const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
  };
  
  // Заданий поріг для логування
  let logThreshold = LOG_LEVELS.INFO;
  
  // Функція логування
  function log(level, message) {
    if (level >= logThreshold) {
      console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
    }
  }
  
  // Функція для задання рівня логування
  function setLogLevel(level) {
    logThreshold = level;
  }
  
  // Експорт функції log та функції задання рівня логування


  export { log, setLogLevel, LOG_LEVELS };
