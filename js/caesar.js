function suche() {
    let content = document.getElementById("formularinhalt").value;
    content = content.trim();
    content = content.toLowerCase();
    if (content.includes(102)) {
        document.location = "../../html/lösung-texte/caesar.html#102";
    } else if (content.includes(106)) {
        document.location = "../../html/lösung-texte/caesar.html#106";
    } else if (content.includes(110)) {
        document.location ="../../html/lösung-texte/caesar.html#110";
    } else if (content.includes("114")) {
        document.location ="../../html/lösung-texte/caesar.html#114";
    } else if (content.includes("116")) {
        document.location ="../../html/lösung-texte/caesar.html#116";
    }
    else {
        alert("Es wurde keine mit deiner Suchanfrage" + " " + '"' +
        content + '"' + " " + "übereinstimmende Buchseite gefunden.\n Hinweis: " + "Gib in dieses Suchfeld nur Buchseitenzahlen ein.")
    }
}