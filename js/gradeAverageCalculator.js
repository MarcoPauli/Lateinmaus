/* HIER WERDEN ZUERST EINMAL ALLE WICHTIGEN VARIABLEN DEKLARIERT
 (UND TEILWEISE AUCH SCHON INITIALISIERT)*/

// Englischvariablen
const eKlnContent = ["-"];
const eGlnContent = ["-"];
const eKlnAverageZw = [];
const eGlnAverageZw = [];
const englischQZw = [];
let eKlnAverage;
let eGlnAverage;
let englischQ;//Ende Englischvariablen

//Lateinvariablen
const lKlnContent = ["-"];
const lGlnContent = ["-"];
const lKlnAverageZw = [];
const lGlnAverageZw = [];
const lateinQZw = [];
let lKlnAverage;
let lGlnAverage;
let lateinQ;//Ende Lateinvariablen

/*DER NÄCHSTE TEIL DES PROGRAMMS sind FUNKTIONEN, DIE SOWOHL
FÜR ENGLISCH ALS AUCH FÜR LATEIN VERWENDET WERDEN*/

function qwert(Content, Average, Speicher) {
    if (Content[0] == "-") {
        Average = parseInt(0);
    } else if (Content.length == 1) {
        Average = parseInt(Content[0]);
    } else if (Content.length == 2) {
        Average = (parseInt(Content[0]) + parseInt(Content[1])) / 2;
    } else if (Content.length == 3) {
        Average = (parseInt(Content[0]) + parseInt(Content[1]) + 
        parseInt(Content[2])) / 3;
    } else if (Content.length == 4) {
        Average = (parseInt(Content[0]) + parseInt(Content[1]) + 
        parseInt(Content[2]) + parseInt(Content[3])) / 4;
    }
    return Speicher.push(Average);
}
function check(KlnContent, GlnContent, Q, KlnSpeicher, GlnSpeicher, QZw) {
    if (KlnContent[0] == "-") {
        Q = GlnSpeicher[0];
    } else if (GlnContent[0] == "-") {
        Q = KlnSpeicher[0];
    } else if ((KlnContent[0] == "-") && (GlnContent[0] == "-")) {
        Q = 0;
    } else {
        Q = (2 * GlnSpeicher[0] + KlnSpeicher[0]) / 3;
    }
    QZw.push(Q);
    }//Ende der Funktionen

// DER NÄCHSTE TEIL DES PROGRAMMS IST FÜR ENGLISCH ZUSTÄNDIG
document.getElementById("eKLN").innerHTML = eKlnContent.join("; ");
qwert(eKlnContent, eKlnAverage, eKlnAverageZw);
document.getElementById("eGLN").innerHTML = eGlnContent.join("; ");
qwert(eGlnContent, eGlnAverage, eGlnAverageZw);
check(eKlnContent, eGlnContent, englischQ, eKlnAverageZw, eGlnAverageZw, englischQZw);
englischQZw[0] = englischQZw[0].toFixed(2);
document.getElementById("eAverage").innerHTML = englischQZw[0].replace(".", ",");//Ende Englischteil

// DER NÄCHSTE TEIL DES PROGRAMMS IST FÜR LATEIN ZUSTÄNDIG
document.getElementById("lKLN").innerHTML = lKlnContent.join("; ");
qwert(lKlnContent, lKlnAverage, lKlnAverageZw);
document.getElementById("lGLN").innerHTML = lGlnContent.join("; ");
qwert(lGlnContent, lGlnAverage, lGlnAverageZw);
check(lKlnContent, lGlnContent, lateinQ, lKlnAverageZw, lGlnAverageZw, lateinQZw);
lateinQZw[0] = lateinQZw[0].toFixed(2);
document.getElementById("lAverage").innerHTML = lateinQZw[0].replace(".", ",");//Ende Lateinteil