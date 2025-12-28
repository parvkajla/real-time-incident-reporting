const API_URL = "http://127.0.0.1:8000/incidents/";

async function loadIncidents() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch incidents");
    }

    const data = await response.json();

    // 🔥 Ensure array
    if (!Array.isArray(data)) {
      throw new Error("Invalid response format");
    }

    const tableBody = document.getElementById("incidentTableBody");
    tableBody.innerHTML = "";

    data.forEach(incident => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${incident.id}</td>
        <td>${incident.type}</td>
        <td>${incident.description}</td>
        <td>${incident.location}</td>
        <td class="severity ${incident.severity.toLowerCase()}">
          ${incident.severity}
        </td>
        <td>${incident.status}</td>
      `;

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error("Dashboard Error:", error);
    alert("❌ Failed to load incidents");
  }
}

// Load on page open
loadIncidents();
