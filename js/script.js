const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function login() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (usuario === ADMIN_USER && password === ADMIN_PASS) {
    msg.textContent = "Acceso concedido ✅";
    localStorage.setItem("isAdmin", "true");
  } else {
    msg.textContent = "Credenciales incorrectas ❌";
  }
}