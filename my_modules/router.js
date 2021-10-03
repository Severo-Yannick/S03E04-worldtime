// Récupération des dépendences
const dayjs = require("dayjs");
const express = require("express");
// Création du routeur express
const router = express.Router();
// La liste des capitales
const listOfCapitals = require("./capitalCities");
// Mettre en majuscule la première lettre de chaque mots - bonus perso
const capitalizeFirstLetter = (text) => {
  return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

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
      break;
    } 
  }
  if (foundCapital) {
    // Date courante au format dayJS et Time Zone de la capitale
    let currentDate = dayjs().tz(foundCapital.tz);
    
    res.send(`
      <h1>Capitale: ${foundCapital.name}</h1>
      <h3>Time Zone: ${foundCapital.tz}</h3>
      <h3>Date et Heure: ${capitalizeFirstLetter(currentDate.format('LLLL'))}</h3>
      <a href='/'>Retour à l'accueil<a>
    `);
  }
  else {
    res.status(404).send(`
      <h1>Page ${req.url} non trouvée<h1>
      <a href='/'>Retour à l'accueil<a>
    `);
  }
});

module.exports = router;
