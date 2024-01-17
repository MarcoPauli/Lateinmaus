//!!!Code für den Computer!!!

let learningContents = document.getElementById("learningContents");
let showlearningContentsMenu = document.getElementById("showlearningContentsMenu");
learningContents.addEventListener("mouseover", showOffersNavFunc);
learningContents.addEventListener("mouseleave", removeOffersNavFunc);

function showOffersNavFunc() {
    showlearningContentsMenu.style.display = "block";
}

function removeOffersNavFunc() {
    showlearningContentsMenu.style.display = "none";
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