// Define a global variable to store user data
let userData;

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const message = document.getElementById("message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Redirect to the dashboard or any other page upon successful login.
      window.location.href = "dashboard.html";
    } else {
      message.textContent = "Invalid username or password. Please try again.";
    }
  });

  // Fetch the user data from the JSON file
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      userData = data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});
