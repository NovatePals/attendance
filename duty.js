const dutyRoster = [
  {
    day: "Monday",
    dayIndex: 1,
    location: "MBSJ FIELD",
    duties: [
      {
        duty: "janitorial services",
        staff: ["John Doe"],
      },
      {
        duty: "warehouse logistics",
        staff: ["Jane Smith"],
      },
      {
        duty: "lunch",
        staff: ["Michael Johnson"],
      },
      {
        duty: "customer support",
        staff: ["Emily Davis"],
      },
      {
        duty: "dinner",
        staff: ["Robert Wilson"],
      },
    ],
  },
  {
    day: "Tuesday",
    dayIndex: 2,
    location: "MBSJ FIELD",
    duties: [
      {
        duty: "janitorial services",
        staff: ["Sarah Brown"],
      },
      {
        duty: "warehouse logistics",
        staff: ["Olivia Taylor"],
      },
      {
        duty: "lunch",
        staff: ["John Smith"],
      },
      {
        duty: "customer support",
        staff: ["Ava Martinez"],
      },
      {
        duty: "dinner",
        staff: ["Daniel Lee"],
      },
    ],
  },
  {
    day: "Wednesday",
    dayIndex: 3,
    location: "MBSJ FIELD",
    duties: [
      {
        duty: "janitorial services",
        staff: ["William Johnson"],
      },
      {
        duty: "warehouse logistics",
        staff: ["Richard Taylor"],
      },
      {
        duty: "lunch",
        staff: ["Mary Johnson"],
      },
      {
        duty: "customer support",
        staff: ["Linda Wilson"],
      },
      {
        duty: "dinner",
        staff: ["Michael Brown"],
      },
    ],
  },
  {
    day: "Thursday",
    dayIndex: 4,
    location: "MBSJ FIELD",
    duties: [
      {
        duty: "janitorial services",
        staff: ["James Davis"],
      },
      {
        duty: "warehouse logistics",
        staff: ["Karen Miller"],
      },
      {
        duty: "lunch",
        staff: ["Jessica Martinez"],
      },
      {
        duty: "customer support",
        staff: ["Susan Lee"],
      },
      {
        duty: "dinner",
        staff: ["David Jones"],
      },
    ],
  },
  {
    day: "Friday",
    dayIndex: 5,
    location: "MBSJ FIELD",
    duties: [
      {
        duty: "janitorial services",
        staff: ["Chuckles McLaughlin"],
      },
      {
        duty: "warehouse logistics",
        staff: ["Wanda Wonderfun"],
      },
      {
        duty: "lunch",
        staff: ["Barry Bumblebee"],
      },
      {
        duty: "customer support",
        staff: ["Penny Pranksalot"],
      },
      {
        duty: "dinner",
        staff: ["Jimmy"],
      },
    ],
  },
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

  // Initialize an empty duties map
  const dutiesMap = {};

  // Loop through the duty roster data and update the duties map
  dutyRoster.forEach((entry) => {
    const date = formatDate(today, entry.dayIndex); // Calculate the date

    // Create a row for this day and populate the table
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${entry.day}</td>
          <td>${date}</td>
          <td>${entry.location}</td>
          <td>${entry.duties
            .find((duty) => duty.duty === "janitorial services")
            .staff.join(", ")}</td>
          <td>${entry.duties
            .find((duty) => duty.duty === "warehouse logistics")
            .staff.join(", ")}</td>
          <td>${entry.duties
            .find((duty) => duty.duty === "lunch")
            .staff.join(", ")}</td>
          <td>${entry.duties
            .find((duty) => duty.duty === "customer support")
            .staff.join(", ")}</td>
          <td>${entry.duties
            .find((duty) => duty.duty === "dinner")
            .staff.join(", ")}</td>
      `;
    rosterBody.appendChild(row);
  });
});
