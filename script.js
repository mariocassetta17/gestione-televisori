let accounts = []; // Array per memorizzare gli account creati
let isLoggedIn = false;

function login() {
  const password = document.getElementById("password").value;
  if (password === "casetta2") {
    isLoggedIn = true;
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("accountForm").style.display = "block";
    document.getElementById("welcomeMessage").style.display = "block";
  } else {
    alert("Password errata!");
  }
}

function createAccount() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  if (username && password) {
    accounts.push({ username, password });
    document.getElementById("accountMessage").innerText = `Account ${username} creato con successo!`;
  } else {
    alert("Inserisci tutti i campi.");
  }
}

function logout() {
  isLoggedIn = false;
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("accountForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("password").value = '';
}
