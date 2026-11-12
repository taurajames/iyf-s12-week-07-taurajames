# Day 5: Weather Dashboard Review

## Project Reviewed

Week 6: Weather Dashboard

## 1. API Request Handling

**Observation:** City names are inserted directly into the API URL.

**Suggested improvement:** Use `encodeURIComponent()` to safely handle city names containing spaces or special characters.

## 2. Error Handling

**Observation:** The application uses `JSON.parse()` to load search history without a try-catch block.

**Suggested improvement:** Add error handling so corrupted LocalStorage data does not prevent the application from loading.

## 3. Search History Validation

**Observation:** Saved search history is loaded without checking whether the data is an array of strings.

**Suggested improvement:** Validate the saved data before using it.

## 4. Code Formatting

**Observation:** Some statements have inconsistent indentation, especially inside the search form event listener.

**Suggested improvement:** Apply consistent formatting to make the code easier to read.

## 5. Temperature Display

**Observation:** The temperature symbol appears incorrectly as `Â°C` in the code output reviewed.

**Suggested improvement:** Check the file encoding and use the correct Celsius symbol (`°C`).

## 6. User Experience

**Observation:** The search history section does not display a message when there are no saved searches.

**Suggested improvement:** Add an empty-state message such as "No recent searches yet."

## What I Learned

I learned that reviewing an existing project helps identify problems that may not be immediately visible during development.

I also learned the importance of error handling, data validation, readable code and user-friendly messages.

## Conclusion

The Weather Dashboard already supports API requests, weather display, loading messages, error messages and recent search history. These improvements would make it more reliable and easier to use.
