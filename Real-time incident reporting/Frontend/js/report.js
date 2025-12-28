const API_URL = "http://127.0.0.1:8000/incidents/";

const form = document.getElementById("incidentForm");
const typeEl = document.getElementById("type");
const descEl = document.getElementById("description");
const severityEl = document.getElementById("severity");
const locationEl = document.getElementById("location");

let map, marker;

/* ---------- MAP ---------- */
function initMap(lat, lng) {
  map = L.map("map").setView([lat, lng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  marker = L.marker([lat, lng], { draggable: true }).addTo(map);

  updateLocation(lat, lng);

  marker.on("dragend", () => {
    const p = marker.getLatLng();
    updateLocation(p.lat, p.lng);
  });

  map.on("click", (e) => {
    marker.setLatLng(e.latlng);
    updateLocation(e.latlng.lat, e.latlng.lng);
  });
}

function updateLocation(lat, lng) {
  locationEl.value = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
}

navigator.geolocation.getCurrentPosition(
  (pos) => initMap(pos.coords.latitude, pos.coords.longitude),
  () => initMap(28.6139, 77.2090) // Delhi fallback
);

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    type: typeEl.value.trim(),
    description: descEl.value.trim(),
    location: locationEl.value.trim(),
    severity: severityEl.value.toLowerCase() // 🔥 THIS FIXES EVERYTHING
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Backend error:", errText);
      throw new Error("Request failed");
    }

    alert("✅ Incident reported successfully!");
    form.reset();
    window.location.href = "dashboard.html";

  } catch (err) {
    alert("❌ Error submitting incident");
    console.error(err);
  }
});
