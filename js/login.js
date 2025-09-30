"use strict";

//user: admin123
//password: 12345

const btnLogin = document.querySelector(".login-btn");

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const username = document.querySelector(".usuario").value.toLowerCase();
  const password = document.querySelector(".contrasena").value;

  if (username === "admin123" && password === "12345") {
    window.location.href = "admin.html";
  } else {
    // alert("Usuario o contraseña incorrecta");
    document.getElementById("alertBox").classList.remove("d-none");
  }
});
