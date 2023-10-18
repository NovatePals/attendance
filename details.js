fetch("details.json")
	.then((response) => response.json())
	.then((data) => {
		const staffDetails = document
			.getElementById("staffDetails")
			.getElementsByTagName("tbody")[0];

		data.forEach((staff) => {
			const row = staffDetails.insertRow(staffDetails.rows.length);
			const cell1 = row.insertCell(0);
			const cell2 = row.insertCell(1);
			const cell3 = row.insertCell(2);
			const cell4 = row.insertCell(3);

			cell1.textContent = staff.name;
			cell2.textContent = staff.attendanceRate;
			cell3.textContent = staff.department;
			cell4.textContent = staff.offenses;
		});
	})
	.catch((error) => console.error(error));
