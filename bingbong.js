const form = document.querySelector(".signupform");
const password = document.querySelector("#password");
let tx = 0;
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(password.value);
    switch (password.value) {
        case "Penis":
            document.getElementById("tekstrep").innerHTML = "penis moment";
            break;

        case "bruh":
            document.getElementById("tekstrep").innerHTML = "bruh";
            break;

        case "9+10":
            document.getElementById("tekstrep").innerHTML = "21";
            break;

        case "red":
            document.getElementById("tekstrep").innerHTML = "sexy time";
            document.body.style.backgroundColor = "red";
            break;

        case "fart":
            document.getElementById("tekstrep").innerHTML = ":)";
            play();
            break;
    
        default:
            document.getElementById("tekstrep").innerHTML = "Feil kode, prøv igjen";
            document.body.style.backgroundColor = "white";
            break;
            
    }
});

function play() {
  let audio = document.getElementById("audio");
  audio.play();
}