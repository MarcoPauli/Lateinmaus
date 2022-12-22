function datum() {
    const d = new Date();
    document.getElementById("jahr").innerHTML = d.getFullYear();
    const months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
    const e = new Date();
    let month = months[e.getMonth()];
    document.getElementById("monat").innerHTML = month;
}

function Content() {
    let text = document.getElementsByClassName("inhalt")[0];
    if (text.innerHTML.length <= 1) {
        let alternativ = "<font color=grey><b>Derzeit keine bevorstehenden Termine👍</b></font>" + "<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
        document.getElementById("inhalt").innerHTML = alternativ;
    }
}