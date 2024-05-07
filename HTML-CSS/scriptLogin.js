const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function validateFields() {
  const emailValid = isEmailValid();
  document.getElementById("recover-password-button").disabled = !emailValid;
}

function isEmailValid() {
  const email = document.getElementById("emailLogin").value;
  if (!email) {
    return false;
  }
  return true;
}

function isPasswordValid() {
  const password = document.getElementById("passwordLogin").value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }