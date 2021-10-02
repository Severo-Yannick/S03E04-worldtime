// Récupération des dépendences
const express = require("express");
// Création du routeur express
const router = express.Router();
// La liste des capitales
const listOfCapitals = require("./capitalCities");

// Page d'accueil
router.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname + "/views/",
  });
});

// Route paramétrée qui revoie /city/leNomDeLaCapitale
router.get("/city/:capital", (req, res) => {
  const askedCapital = req.params.capital;
  let foundCapital;

  for (testCapital of listOfCapitals) {
    if (testCapital.name.toLowerCase() === askedCapital) {
      foundCapital = testCapital;
      res.send(`
        <h1>${foundCapital.name}</h1>
        <p>${foundCapital.tz}</p>
        <a href='/'>Retour à l'accueil<a>
      `);
    }
  }
});

module.exports = router;
