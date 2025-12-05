let test = alert(
  "vous aller savoir votre etat consernant le symtome du coronabirus"
);
let score = 0;

let fievre = prompt("Avez-vous de la fièvre ? (oui/non)");
if (fievre === "oui") score += 20;

let vomit = prompt("Avez-vous des vomissements ? (oui/non)");
if (vomit === "oui") score += 20;
let diar = prompt("Avez-vous de la diarrhée ? (oui/non)");
if (diar === "oui") score += 20;

let head = prompt("Avez-vous des maux de tête ? (oui/non)");
if (head === "oui");
let toux = prompt("Toussez-vous ? (oui/non)");
if (toux === "oui") score += 20;

alert("Votre pourcentage de symptômes est de  "+ score  +" %");
