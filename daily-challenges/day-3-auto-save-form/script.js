
// Select the form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Select the save status message
const saveStatus = document.getElementById("save-status");

// Select the clear form button
const clearButton = document.getElementById("clear-form");

// Storage key
const STORAGE_KEY = "auto-save-form-data";


// Save form information in LocalStorage
function saveFormData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

        saveStatus.textContent = "Your information was saved successfully.";
    } catch (error) {
        console.error("Could not save form data:", error);
        saveStatus.textContent = "Unable to save your information.";
    }
}


// Restore previously saved form information
function loadFormData() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return;
        }

        const formData = JSON.parse(savedData);

        if (
            !formData ||
            typeof formData !== "object" ||
            typeof formData.name !== "string" ||
            typeof formData.email !== "string" ||
            typeof formData.message !== "string"
        ) {
            return;
        }

        nameInput.value = formData.name;
        emailInput.value = formData.email;
        messageInput.value = formData.message;

        saveStatus.textContent = "Your previous information has been restored.";
    } catch (error) {
        console.error("Could not restore form data:", error);
        saveStatus.textContent = "Could not restore previous information.";
    }
}


// Automatically save form data every 5 seconds
setInterval(function () {
    saveFormData();
}, 5000);


// Clear all form fields and saved information
clearButton.addEventListener("click", function () {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    localStorage.removeItem(STORAGE_KEY);

    saveStatus.textContent = "The form has been cleared.";
});


// Restore saved information when the page loads
loadFormData();
