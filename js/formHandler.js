const API_BASE = "http://localhost:5000/api";

async function handleFormSubmit(event, endpoint) {
  event.preventDefault();
  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Your request has been sent successfully.");
      form.reset();
    } else {
      alert("There was an issue sending your request.");
    }
  } catch (error) {
    alert("Server error. Please try again later.");
  }
}

document.getElementById("contactForm")?.addEventListener("submit", e => handleFormSubmit(e, "inquiries"));
document.getElementById("bookingForm")?.addEventListener("submit", e => handleFormSubmit(e, "bookings"));
