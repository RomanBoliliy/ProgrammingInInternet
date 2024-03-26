// module.js

// Константи рівнів логування
  class Logger {
    constructor() {
        this.LOG_LEVELS = {
            DEBUG: 0,
            INFO: 1,
            WARNING: 2,
            ERROR: 3
          };
      // Заданий поріг для логування
      this.logThreshold = this.LOG_LEVELS.INFO;
    }
  
    // Функція логування
    log(level, message) {
      if (level >= this.logThreshold) {
        console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
      }
    }
  
    // Функція для задання рівня логування
    setLogLevel(level) {
      this.logThreshold = level;
    }
  }
  
  // Експорт класу Logger за замовчуванням
  export default Logger;
  
