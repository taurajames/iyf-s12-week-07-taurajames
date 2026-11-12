
// Select the search form
const searchForm = document.getElementById("search-form");

// Select the search input
const searchInput = document.getElementById("search-input");

// Select the search history list
const searchHistory = document.getElementById("search-history");

// Select the clear history button
const clearHistoryButton = document.getElementById("clear-history");


// The key used to store search history
const STORAGE_KEY = "recent-searches";

// Load previous searches from LocalStorage
let searches = [];

try {
    const savedSearches = localStorage.getItem(STORAGE_KEY);

    if (savedSearches) {
        const parsedSearches = JSON.parse(savedSearches);

        if (
            Array.isArray(parsedSearches) &&
            parsedSearches.every((search) => typeof search === "string")
        ) {
            searches = parsedSearches.slice(0, 5);
        }
    }
} catch (error) {
    console.error("Could not load search history:", error);
}


// Display saved searches on the page
function displaySearchHistory() {
    searchHistory.innerHTML = "";

    if (searches.length === 0) {
        const message = document.createElement("li");
        message.textContent = "No recent searches yet.";
        searchHistory.appendChild(message);
        return;
    }

    searches.forEach(function (search) {
        const listItem = document.createElement("li");
        listItem.textContent = search;
        searchHistory.appendChild(listItem);
    });
}


// Save search history in LocalStorage
function saveSearchHistory() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
    } catch (error) {
        console.error("Could not save search history:", error);
    }
}


// Handle search form submission
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        return;
    }

    // Remove an existing copy of the search
    searches = searches.filter(function (search) {
        return search.toLowerCase() !== searchTerm.toLowerCase();
    });

    // Add the newest search at the beginning
    searches.unshift(searchTerm);

    // Keep only the five most recent searches
    searches = searches.slice(0, 5);

    saveSearchHistory();
    displaySearchHistory();

    // Clear the search input
    searchInput.value = "";
});


// Clear all saved searches
clearHistoryButton.addEventListener("click", function () {
    searches = [];

    saveSearchHistory();
    displaySearchHistory();
});


// Display search history when the page loads
displaySearchHistory();
