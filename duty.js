const dutyRoster = [
  {
    day: "Monday",
    location: "MBSJ FIELD",
    duty: "Collecting Rubbish",
  },
  {
    day: "Tuesday",
    location: "CYBERIA APARTMENT",
    duty: "Cleaning Rubbish Bins",
  },
  {
    day: "Wednesday",
    location: "MMU UNIVERSITY",
    duty: "Change Bins",
  },
  {
    day: "Thursday",
    location: "DPULZE",
    duty: "Collecting Rubbish",
  },
  {
    day: "Friday",
    location: "KEDAI MAMAK",
    duty: "Eat Rubbish",
  },
  // Add more roster data here
];

document.addEventListener("DOMContentLoaded", function () {
  const rosterBody = document.getElementById("roster-body");
  const today = new Date();

  // Function to format the date based on the day index (0 for Sunday, 1 for Monday, etc.)
  function formatDate(date, dayIndex) {
    const daysToAdd = dayIndex - date.getDay();
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString();
  }

  // Loop through the duty roster data and create rows in the table
  dutyRoster.forEach((entry, index) => {
    const date = formatDate(today, index); // Calculate the date
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${entry.day}</td>
          <td>${date}</td>
          <td>${entry.location}</td>
          <td>${entry.duty}</td>
      `;
    rosterBody.appendChild(row);
  });
});
