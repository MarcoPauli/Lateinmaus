/*

COPYRIGHT MARCROSOFT 2022 - ALL RIGHTS RESERVED

*/


//Mögliche Suchbegriffe
const a = ["home", "start", "startseite", "lateinmaus"];
//const b = ["lerninhalte"];
const c = ["neuigkeiten", "news"];
const d = ["termine"];
const e = ["impressum"];
const f = ["hilfe", "help"];
const g = ["lateinmausgruppe"];
const h = ["stand"];
const i = ["englisch", "english", "inglés"];
const j = ["spanisch", "spanish", "español"];
const k = ["latein", "latin", "latín"];
const o = ["lateingrammatik", "latein grammatik"];
const q = ["login", "benutzerbereich", "notenbereich", "noten"];
const s = ["hermeneus"];
//const u = ["hausaufgabe", "homework", "deberes"];
const v = ["chemie", "chemistry", "química"];

//Links zu den möglichen Suchbegriffen
let a_url = "https://lateinmaus.netlify.app/index.html";
let c_url = 'https://lateinmaus.netlify.app/html/news.html';
let d_url = "https://lateinmaus.netlify.app/html/termine.html";
let e_url = "https://lateinmaus.netlify.app/html/impressum.html";
let f_url = "https://lateinmaus.netlify.app/html/hilfe.html";
let g_url = "https://lateinmausgruppe.netlify.app";
let h_url = "https://lateinmaus.netlify.app/html/stand.html";
let i_url = "https://lateinmaus.netlify.app/html/englisch.html";
let j_url = "https://lateinmaus.netlify.app/html/spanisch.html";
let k_url = "https://lateinmaus.netlify.app/html/latein.html";
let o_url = "https://lateinmaus.netlify.app/html/lateingrammatik.html";
let q_url = "https://lateinmaus.netlify.app/html/login.html";
let s_url = "https://www.hermeneus.eu/";
let v_url = "https://lateinmaus.netlify.app/html/chemie.html";


let isTrue = false;


//AlertBox anzeigen
function showAlertBox() {
    let element = document.getElementById("alertBox");
    element.style.display = "block";
    EventListener();
}
//Ende der Funktion


//Beim Klicken auf den Suchbutton oder beim Drücken der Entertaste wird die Suchfunktion ausgelöst
function EventListener() {
    let submitB = document.getElementById("searchButton");
    let inputSearch = document.getElementById("search");
    inputSearch.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    submitB.click();
    search();
  }
});
}
//Ende der Funktion


//Diese Funtion verarbeitet die Suchanfrage
function search() {
    document.getElementById("alternativeAlert").innerHTML = "";
    let $1 = document.getElementById("search").value;
    $1 = $1.trim();
    let $ = $1.toLowerCase();
    checkSearchWords($);
}
//Ende der Funktion


//Diese Funktion geht alle Möglichkeiten durch
function checkSearchWords ($) {
        checkUserInput($, a, a_url);
        checkUserInput($, c, c_url);
        checkUserInput($, d, d_url);
        checkUserInput($, e, e_url);
        checkUserInput($, f, f_url);
        checkUserInput($, g, g_url);
        checkUserInput($, h, h_url);
        checkUserInput($, i, i_url);
        checkUserInput($, j, j_url);
        checkUserInput($, o, o_url);
        checkUserInput($, k, k_url);
        checkUserInput($, q, q_url);
        checkUserInput($, s, s_url);
        checkUserInput($, v, v_url);
}
//Ende der Funktion


//Diese Funktion leitet entweder zur gewünschten Seite weiter oder zeigt eine Fehlermeldung
function checkUserInput(input, array, url) {
    
    let alternativeAlert = document.getElementById("alternativeAlert");
    for (let i = 0; i < array.length; i++) {
        if(array[0] === k[0]) {
            if (input === (k[0] || k[1] || k[2])) {
                document.location = "https://lateinmaus.netlify.app/html/latein.html";
                alternativeAlert.innerHTML = "";
            }
        } else if(input.includes(array[i])) {
            alternativeAlert.innerHTML = "";
            document.location = url;
            return isTrue = true;
        } else if ((input == "") || (input == "undefined") || !(isNaN(input))) {
            ""
        } else if (isTrue) {
            ""
        } else {
            alternativeAlert.innerHTML = "<font style='color:red;font-weight:bold;'>❗Es wurden keine mit deiner Suchanfrage" + " " + '"' + "<abbr title='Deine Suchanfrage' style='color:darkgrey;'>" + input + "</abbr>" + 
            '"' + " " + "übereinstimmenden Dokumente gefunden.❗</font>";
            //return isTrue = 0;
        }
        if(isTrue) {
            return isTrue;
        }
    }
    //return isTrue;
}
//Ende der Funktion


//Diese Funktion schließt die Alertbox
function closeAlertBox() {
    let element = document.getElementById("alertBox");
    element.style.display = "none";
    resetValue();
}
//Ende der Funktion


//Diese Funktion setzt den Userinput zurück 
function resetValue() {
    let element = document.getElementById("search");
    element.value = "";
    document.getElementById("alternativeAlert").innerHTML = "";
}
//Ende der Funktion


/*

COPYRIGHT MARCROSOFT 2022 - ALL RIGHTS RESERVED

*/