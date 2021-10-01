// Module Dayjs et les plugins pour gérer les timezones et les formats "localisés"
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
require('dayjs/locale/fr'); 
dayjs.locale('fr');