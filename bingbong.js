const form = document.querySelector(".signupform");
const password = document.querySelector("#password");

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(password.value);
});

