//Nach Oben Button
let button = document.getElementById("topButton");
button.addEventListener("click", up);
function up () {
    window.scrollTo(0, 0);
}

//Datumsanzeige für die Index-Datei
function indexDatum() {
   const de = new Date();
    document.getElementById("lateinmaus").innerHTML = '<p id="lateinmaus">&#9884<a href="index.html" title="Startseite">' + de.getFullYear() + " " + 'Lateinmaus</a>&#9884</p>';
}

//Darkmode
setInterval(function mode () {
   let body = document.querySelector("body");
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
       body.style.backgroundColor = "black";
       body.style.color = "white";
    } else {
       body.style.backgroundColor = "white";
       body.style.color = "black";
    }
}, 1000);

//Datumsanzeige für die anderen Dateien
function normalDatum() {
    const de = new Date();
    document.getElementById("lateinmaus").innerHTML = '<p id="lateinmaus">&#9884<a href="https://lateinmaus.netlify.app/index.html" title="Startseite">' + de.getFullYear() + " " + 'Lateinmaus</a>&#9884</p>';
}

//Funktionen für die Startseite
function hasi(weich) {
    document.getElementById("para").innerHTML = "Ich bin der kleine " + weich + "!";
 }
function dings() {
   document.getElementById("para").innerHTML = "<br>";
 }