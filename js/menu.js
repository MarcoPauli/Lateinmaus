//!!!Code für den Computer!!!

let lerninhalteContent = document.getElementById("lerninhalteContent").style.display = "none";
let lerninhalte = document.getElementById("lerninhalte");
lerninhalte.addEventListener("click", showLerninhalteContent);
function showLerninhalteContent () {
    let x = lerninhalteContent;
    if (x == "none") {
        document.getElementById("lerninhalteContent").style.display = "block";
        x = "block";
    } else if (x == "block") {
        document.getElementById("lerninhalteContent").style.display = "none";
        x = "none";
    }
    return lerninhalteContent = x;
}

//!!!Code fürs Handy!!!
let mobileMenuContent = document.getElementById("mobileMenuContent").style.display = "none";
let mobileMenu = document.getElementById("showMobileMenuButton");
mobileMenu.addEventListener("click", showMobileMenuContent);
function showMobileMenuContent () {
    let x = mobileMenuContent;
    if (x == "none") {
        document.getElementById("mobileMenuContent").style.display = "block";
        x = "block";
    } else if (x == "block") {
        document.getElementById("mobileMenuContent").style.display = "none";
        x = "none";
    }
    return mobileMenuContent = x;
}