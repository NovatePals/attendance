// Create QR code with date formatted URL
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0].replace(/-/g, ""); // Format date as YYYYMMDD
const url = `https://http://127.0.0.1:5500/?date=${formattedDate}`;
const qrcode = new QRCode(document.getElementById("qrcode"), url);

// Simulate data transmission
document.getElementById("qrcode").addEventListener("click", function () {
	// Update the JSON file with attendance data
	const data = {
		date: formattedDate,
		attendance: 1, // Mark attendance as "1" when the QR code is clicked
	};

	// Simulate saving to a JSON file (local storage)
	const storageKey = "attendanceData";
	const existingData = JSON.parse(localStorage.getItem(storageKey)) || [];

	existingData.push(data);
	localStorage.setItem(storageKey, JSON.stringify(existingData));

	// Display a popup to indicate successful attendance marking
	document.getElementById("message").innerText =
		"Attendance marked successfully!";
});

// Show the popup when attendance is marked successfully
document.getElementById("qrcode").addEventListener("click", function () {
	// Update the JSON file and show the popup
	// ...

	// Show the popup
	const popup = document.getElementById("popup");
	popup.style.display = "block";
	setTimeout(() => {
		popup.style.display = "none";
	}, 3000); // Hide the popup after 3 seconds
});
