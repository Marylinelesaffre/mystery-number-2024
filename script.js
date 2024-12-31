let numero_mystere; // Variable pour le nombre mystère
let essais = 0; // Compteur d'essais
let maxEssais = 3; 
let maxNumber = 10;


function maFonction() {
    
    if (essais === 0) {
        numero_mystere = Math.floor(Math.random() * 10) + 1; // Génère un nombre entre 1 et 10
        console.log("Nombre mystère généré :", numero_mystere); // Affiche le nombre mystère dans la console
    }

    const userInput = parseInt(document.getElementById("userInput").value); // Récupère l'entrée de l'utilisateur
    console.log("Valeur de l'utilisateur", userInput);
    const message = document.getElementById("message"); // Récupère l'élément de message
    const essaisDiv = document.getElementById("essaisRestants");

    // Incrémente le compteur d'essais
    essais++;
    const essaisRestants = maxEssais - essais;

    // Réinitialise les classes d'animation
    message.classList.remove("win-message", "game-over-message");

    // Vérifie si l'utilisateur a deviné le numéro
    if (userInput === numero_mystere) {
        message.textContent = "Bravo ! Vous avez deviné le numéro. 🏆";
        message.classList.add("win-message","blink"); // Ajoute la classe d'animation pour la victoire
        

    } else if (essais < maxEssais) {
        let indices; // Déclaration de la variable pour l'indice

        // Donne un indice en fonction de la valeur saisie
        if (userInput < numero_mystere) {
            indices = " Le numéro mystère est plus grand.";
        } else {
            indices = " Le numéro mystère est plus petit.";
        }
        essaisDiv.textContent = "Essais restants : " + essaisRestants; // Mise à jour des essais restants
        // Affiche le message avec l'indice
        message.textContent = "Dommage, essayez encore." + indices;
    } else {
        // Si l'utilisateur a épuisé tous ses essais
        message.textContent = "Game over 👾! Le numéro mystère était " + numero_mystere + " 😔";
        message.classList.add("game-over-message","flash"); // Ajoute la classe d'animation pour le game over
        
    }
}


