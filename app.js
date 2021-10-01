// Création d'un serveur express
const express = require('express');
const app = express();
const PORT = 3000;
// Import du routeur
const router = require('./my_modules/router');

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

// Utilisation du routeur par le serveur
app.use(router);

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur http://localhost:${PORT}`);
})
