
// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Select the body element
const body = document.body;


// Load the saved theme from LocalStorage
const savedTheme = localStorage.getItem("theme");

// Restore dark mode if it was previously selected
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "Switch to Light Mode";
}


// Switch themes when the button is clicked
themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Check which theme is currently active
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Switch to Dark Mode";
    }
});
