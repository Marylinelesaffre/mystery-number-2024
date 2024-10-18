let numero_mystere; // Variable pour le nombre mystère
let essais = 0; // Compteur d'essais
let maxEssais = 3;

function maFonction() {
    if (essais === 0) {
        numero_mystere = Math.floor(Math.random() * 10) + 1; // Génère un nombre entre 1 et 10
        console.log("Nombre mystère généré :", numero_mystere); // Affiche le nombre mystère dans la console
    }

    const userInput = parseInt(document.getElementById("userInput").value); // Récupère l'entrée de l'utilisateur
    console.log("Valeur de l'utitisateur", userInput);
    const message = document.getElementById("message"); // Récupère l'élément de message
    const essaisDiv = document.getElementById("essaisRestants");
    

    // Incrémente le compteur d'essais
    essais++;
    const essaisRestants = maxEssais - essais;

    // Vérifie si l'utilisateur a deviné le numéro
    if (userInput === numero_mystere) {
        message.textContent = "Bravo ! Vous avez deviné le numéro. 🏆";
    } else if (essais < 3) {
        let indices; // Déclaration de la variable pour l'indice

        // Donne un indice en fonction de la valeur saisie
        if (userInput < numero_mystere) {
            indices = " Le numéro mystère est plus grand." ;
        } else {
            indices = " Le numéro mystère est plus petit.";
        }
            essaisDiv.textContent = "Essais restants : " + essaisRestants; // Mise à jour des essais restants
        // Affiche le message avec l'indice
        message.textContent = "Dommage, essayez encore." + indices;
    } else {
        // Si l'utilisateur a épuisé tous ses essais
        message.textContent = "Game over 👾! Le numéro mystère était " + numero_mystere + " 😔";
    }
}


