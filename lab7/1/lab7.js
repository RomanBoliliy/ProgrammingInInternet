// lab7.js

// Імпорт функції log та функції задання рівня логування з модуля
import { log, setLogLevel, LOG_LEVELS } from './module.js';

// Приклади використання

// Встановлення рівня логування на рівень INFO
setLogLevel(LOG_LEVELS.INFO);

// Логування повідомлень різних рівнів
log(LOG_LEVELS.DEBUG, 'Це повідомлення рівня DEBUG');
log(LOG_LEVELS.INFO, 'Це повідомлення рівня INFO');
log(LOG_LEVELS.WARNING, 'Це повідомлення рівня WARNING');
log(LOG_LEVELS.ERROR, 'Це повідомлення рівня ERROR');