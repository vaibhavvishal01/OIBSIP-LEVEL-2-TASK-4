const signinbtn = document.getElementById("sign");
const signupBtn = document.getElementById("up");

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    if (email === "" || password === "") {
        alert("Please Enter your Email and Password");
    } else {
        alert("Sign in Successful! Welcome to the Home Page");
    }
}

function performSignup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const password = document.getElementById("word").value;

    if (name === "" || email === '' || password === '') {
        alert("Please fill up the signup form before pressing the sign up button. Thank you.");
    } else {
        alert("Congratulations, sign up successful!");
    }
}


signinbtn.addEventListener("click", login);
signupBtn.addEventListener("click", performSignup);


const signupButn = document.getElementById("up");
const signupModal = document.getElementById("signupModal");
const closeModal = document.getElementById("closeModal");

signupBtn.addEventListener("click", () => {
    signupModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    signupModal.style.display = "none";
});

const loginbtn = document.getElementById("sign");
const loginmodal = document.getElementById("log");
const closelog = document.getElementById("closeModal");

loginbtn.addEventListener("click", () =>  {
    loginmodal.style.display="block";
})
closelog .addEventListener("click", () => {
     loginmodal.style.display="none";
})
