// lab7.js

// Імпорт класу логування з модуля
import Logger from './module.js';

// Створення нового екземпляру логера
const logger = new Logger();

// Приклади використання

// Встановлення рівня логування на рівень INFO
logger.setLogLevel(logger.LOG_LEVELS.INFO);

// Логування повідомлень різних рівнів
logger.log(logger.LOG_LEVELS.DEBUG, 'Це повідомлення рівня DEBUG');
logger.log(logger.LOG_LEVELS.INFO, 'Це повідомлення рівня INFO');
logger.log(logger.LOG_LEVELS.WARNING, 'Це повідомлення рівня WARNING');
logger.log(logger.LOG_LEVELS.ERROR, 'Це повідомлення рівня ERROR');