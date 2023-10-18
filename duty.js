const dutyRoster = [
  {
    day: "Monday",
    dayIndex: 1,
    location: "MBSJ FIELD",
    duty: "Collecting Rubbish",
  },
  {
    day: "Tuesday",
    dayIndex: 2,
    location: "CYBERIA APARTMENT",
    duty: "Cleaning Rubbish Bins",
  },
  {
    day: "Wednesday",
    dayIndex: 3,
    location: "MMU UNIVERSITY",
    duty: "Change Bins",
  },
  {
    day: "Thursday",
    dayIndex: 4,
    location: "DPULZE",
    duty: "Collecting Rubbish",
  },
  {
    day: "Friday",
    dayIndex: 5,
    location: "KEDAI MAMAK",
    duty: "Eat Rubbish",
  },
  // Add more roster data here
];

document.addEventListener("DOMContentLoaded", function () {
  const rosterBody = document.getElementById("roster-body");
  const today = new Date();

  // Function to format the date based on the day index
  function formatDate(date, dayIndex) {
    const currentDay = date.getDay();
    const daysToAdd = dayIndex - currentDay;
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString();
  }

  // Loop through the duty roster data and create rows in the table
  dutyRoster.forEach((entry) => {
    const date = formatDate(today, entry.dayIndex); // Calculate the date
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
