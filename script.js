// Récupération de l'élément ayant la classe cloud
const cloud = document.querySelector(".cloud");

// Déclaration de la fonction rain qui va permettre de faire tomber la pluie
const rain = () => {
  // Création d'un élément div et ajout de cet élémen dans le DOM
  const divItem = document.createElement("div");
  divItem.classList.add("drop");
  cloud.appendChild(divItem);

  // Création de variables permettant de styliser la manière dont la pluie va tomber
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 50;
  let duration = Math.random() * 0.5;

  // Stylisation de la tombée de la pluie
  divItem.style.left = left + "px";
  divItem.style.width = 0.5 + width + "px";
  divItem.style.height = 0.5 + height + "px";
  divItem.style.animationDuration = 1 + duration + "s";

  //La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    cloud.removeChild(divItem);
  }, 2000);
};

// La méthode setInterval() appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe (exprimé en millisecondes) entre chaque appel.
setInterval(() => {
  // Appel de la fonction rain
  rain();
}, 20);
