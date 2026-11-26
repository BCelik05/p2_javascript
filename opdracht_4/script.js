let outputText = document.getElementById("leeftijd");

let leeftijd = prompt("In welk jaar ben je geboren?");

let output = "Je bent ongeveer " + (2026 - leeftijd) + " jaar oud.";

outputText.innerHTML = output;
console.log(output);
