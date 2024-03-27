const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
function generatePasswords(){
        passwordOne.textContent = password()
        passwordTwo.textContent = password()
}


function password(){
    let pass = ""
    for(let i = 0; i < 15; i++){
        pass += characters[Math.floor(Math.random() * characters.length)]
    }
    
    return pass
    
}

let passwordBoxes = document.querySelectorAll(".password-box")

passwordBoxes.onclick = function() {
    document.execCommand("copy")
}

passwordBoxes.forEach(function(passwordBox) {
    passwordBox.onclick = function() {
        document.execCommand("copy");
    }

    passwordBox.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", passwordBox.textContent);
            
        }
    });
});