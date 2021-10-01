// Récupération des dépendences
const express = require('express');
// Création du routeur express
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname + '/views/',
  })
;})

module.exports = router;