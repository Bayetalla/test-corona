alert(
  "Vous allez savoir votre état concernant les symptômes du coronavirus.n Tapez 20 si oui et 0 si non pour chaque question."
);

let a = Number(prompt("Avez-vous de la fièvre ? (20 ou 0)"));
let b = Number(prompt("Avez-vous des vomissements ? (20 ou 0)"));
let c = Number(prompt("Avez-vous de la diarrhée ? (20 ou 0)"));
let d = Number(prompt("Avez-vous des maux de tête ? (20 ou 0)"));
let e = Number(prompt("Toussez-vous ? (20 ou 0)"));

let total = a + b + c + d + e;

alert("Votre pourcentage de symptômes est de " + total + " %");
