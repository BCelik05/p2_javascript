// Haal het element op uit het HTML document en sla het op in de variable outputText
let outputText = document.getElementById("naam");

// Sla de naam op in de variable naam
let naam = prompt("Wat is je naam?");

// Sla in de variable output de waarde op van de naam + de onderstaande tekst
let output = "Hallo " + naam + ", " + "welkom bij mijn eerste JavaScript-pagina!";

// toon de tekst in de HTML pagina in het element naam
outputText.innerHTML = output;
console.log(output);