/*function password() {
    let userName = document.getElementById("username").value;
    let userNameHash = "";
    let userNameHash2;
    let userPassword = document.getElementById("passwort").value;
    let userPasswordHash;
    let userPasswordHash2;
    hash(userNameHash, userName);
    hash(userNameHash2, userNameHash);
    hash(userPasswordHash, userPassword);
    hash(userPasswordHash2, userPasswordHash);
    if (userName == userPassword) {
      alert("cool")
    }
    if ((userPasswordHash2 === "12c0e9856d638886b2a44af0af840a068205ae3587526c315af98cea2b4d6315") && (userNameHash2 === "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")) {
      document.location = "../html/" + userPasswordHash + ".html";
      } else {
        let alternativeParagraph = document.getElementById("alternativeText");
        let alternativeText = "Falsche Anmeldedaten eingegeben";
        alternativeParagraph.innerHTML = alternativeText;
        alternativeParagraph.style.color = "red";
        alternativeParagraph.style.fontWeight = "bold";
      }
    }
  
    async function hash (hashHex, userinput) {
      const utf8 = new TextEncoder().encode(userinput);
      const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
      alert(hashHex)
      return hashHex;
    }

*/
let submit = document.getElementById("submit");
let inputPassword = document.getElementById("passwort");
inputPassword.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
    password();
  }
});

function password() {
    let userinputP = document.getElementById("passwort").value;
    let userinputN = document.getElementById("username").value;
    hash();
    async function hash() {
        const utf8 = new TextEncoder().encode(userinputP);
        const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
        const utf82 = new TextEncoder().encode(hashHex);
        const hashBuffer2 = await crypto.subtle.digest('SHA-256', utf82);
        const hashArray2 = Array.from(new Uint8Array(hashBuffer2));
        const hashHex2 = hashArray2.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
        const utf8n = new TextEncoder().encode(userinputN);
        const hashBuffern = await crypto.subtle.digest('SHA-256', utf8n);
        const hashArrayn = Array.from(new Uint8Array(hashBuffern));
        const hashHexn = hashArrayn.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
        if ((hashHex2 === "12c0e9856d638886b2a44af0af840a068205ae3587526c315af98cea2b4d6315") && (hashHexn === "3b6c7b42cc3f686df64a72da6708edaf3ec44199385ce72e80b7bc056219e4d2")) {
        document.location = "../html/" + hashHex + ".html";
        } else {
          let alternativeParagraph = document.getElementById("alternativeText");
          let alternativeText = "Falsche Anmeldedaten eingegeben";
          alternativeParagraph.innerHTML = alternativeText;
          alternativeParagraph.style.color = "red";
          alternativeParagraph.style.fontWeight = "bold";
        }
      }
    }