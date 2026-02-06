const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Greeting Event
greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        output.innerHTML = "<span>⚠</span> Please enter your name to continue.";
        output.style.color = "#ef4444"; // Red
        output.style.backgroundColor = "#fee2e2"; // Light Red Bg
    } else {
        output.innerHTML = `Welcome, <strong>${name}</strong>! <br> You're all set for the Web Lab 🚀`;
        output.style.color = "#059669"; // Green
        output.style.backgroundColor = "#ecfdf5"; // Light Green Bg
    }
});

// Clear Event
clearBtn.addEventListener("click", () => {
    nameInput.value = "";
    output.innerHTML = "";
    output.style.backgroundColor = "transparent";
    nameInput.focus();
});

// Keyup Event (Live Typing)
nameInput.addEventListener("input", () => {
    if (nameInput.value.length > 0) {
        output.innerHTML = `<span class="typing-text">Typing: ${nameInput.value}...</span>`;
        output.style.color = "#6b7280";
        output.style.backgroundColor = "transparent";
    } else {
        output.innerHTML = "";
    }
});