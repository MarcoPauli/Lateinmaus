const quotes = ["Veni, vidi, vici.", "Plenus venter non studet libenter.", "Ora et labora.", "Stultum facit fortuna, quem vult perdere.", "Vita brevis, ars longa.", "Fortes fortuna adiuvat.", "Errare humanum est."];

(function quote() {
    let quote = document.getElementById("quote");
    let d = new Date().getDay();
    quote.innerHTML = quotes[d];
})();