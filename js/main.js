"use script";


//const prenom = prompt("Quel est ton prénom?");
//alert("Bienvenue " + prenom);

let celcius = prompt("Entrez la température ne ° C: 0");

if(isNaN(celcius)) {
    alert('Entrez un nombre !');
} else {
    let fahrenheit = celcius * 9 / 5 + 32;
    alert(`${celcius}°C = ${fahrenheit}°F`);
}

let nom = "Steve";
// Affiche la variable dansl la console
console.log("salut"," le ", nom);

// récupère le <h1> de la page
const titrePrincipal = document.querySelector("h1");
// titre en jaune
titrePrincipal.style.color = "green";

/**
 * Ajoute du style à tous les ´ <li<´ de la page
 */
function styleLI () {

    // Récupère tous les <li>
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);
    // Mets en rouge le 2e élément trouvé
    elementsDeListe[1].style.color = "red";
    // Boucle qui parcours et mets en fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = "yellow";
    }
    // Même chose avec for..of pour mettre le texte en gras
    for (let element of elementsDeListe) {
        element.style.fontWeight = "bold";
    }
}

// Ecouter l'événement click sur le <h1>
titrePrincipal.addEventListener("click", styleLI);


// récupère le formulaire
const form = document.querySelector("form");
// récupère la <ol> avec la classe commentaires
const olCommentaires = document.querySelector(".commentaires");
// récupère l'input #commentaire
const inputCommentaire = document.querySelector("#Commentaire");
// Ecouter l'envoi du formulaire
form.addEventListener("submit", function ajouterCommentaire(event){
    event.preventDefault(); // Stoppe l'envoi du formulaire
    if (inputCommentaire.value === ""){
        alert("Commentaire vide !");
        return; // Stoppe l'événement
    }
    // ajoute le contenu du champ commentaire à la liste
    olCommentaires.innerHTML += "<li>" + inputCommentaire .value + "</li>";
    // Vide le champ commentaire
    inputCommentaire.value = "";
    // Redonne le focus au champ commentaire
    inputCommentaire.focus();
});