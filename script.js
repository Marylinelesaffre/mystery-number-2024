let numero_mystere; // pour que la fonction soit à porter

//déclare ma fonction qui correspond a mon button html
function maFonction(){
    numero_mystere = Math.floor(Math.random() * 10) + 1; // Génère un nombre entre 1 et 10
    console.log("Nombre mystère généré :", numero_mystere);
    
    const userInput = document.getElementById("userInput").value;
    const message = document.getElementById("message");
    
    
    if (userInput == numero_mystere) {
        message.textContent = "Bravo ! Vous avez deviné le numéro.";
    } else {
        message.textContent = "Dommage, essayez encore. (Le numéro était " + numero_mystere + ")";
    }
}
