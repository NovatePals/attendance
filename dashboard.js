document.addEventListener("DOMContentLoaded", () => {
  fetch("dashboard.json")
    .then((response) => response.json())
    .then((data) => {
      const loggedInUsername = "user1"; // Replace with the actual logged-in user's username

      const user = data.users.find(
        (user) => user.username === loggedInUsername
      );

      if (user) {
        document.getElementById("user-name").textContent = user.name;
      } else {
        document.getElementById("user-name").textContent = "User Not Found";
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});
