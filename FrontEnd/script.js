const API_URL = "http://localhost:5000";

// LOGIN FUNCTION
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed");
    }
}

// LOAD VITALS FUNCTION
async function loadVitals() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/api/vitals/latest`, {
        headers: { "Authorization": `Bearer ${token}` }
    });

    const data = await res.json();

    if (data.message) {
        document.getElementById("result").innerHTML = data.message;
        return;
    }

    document.getElementById("result").innerHTML =
        `<p><strong>Heart Rate:</strong> ${data.heartRate}</p>
         <p><strong>Blood Pressure:</strong> ${data.bloodPressure}</p>
         <p><strong>Temperature:</strong> ${data.temperature}</p>`;
}
