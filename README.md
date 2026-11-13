# Week 7: JavaScript Best Practices

A JavaScript project developed as part of the IYF Season 12 Web Development Program.

This project improves my Week 5 To-Do List by applying JavaScript best practices, modular programming, LocalStorage, testing and code quality tools.

It also includes a shopping cart and five daily JavaScript challenges.

## Features

### 1. To-Do List

- Add new tasks.
- Mark tasks as completed.
- Edit and delete tasks.
- Filter tasks by status.
- Clear completed tasks.
- Save tasks and filters using LocalStorage.
- Restore saved data after refreshing the page.

### 2. Shopping Cart

- Add products to the cart.
- Increase or decrease product quantities.
- Remove products.
- View the cart total.
- Save cart data using LocalStorage.

### 3. Daily Challenges

- Persistent theme toggle.
- Search history.
- Auto-saving form.
- JavaScript refactoring.
- Weather Dashboard code review.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage
- Node.js and npm
- Vitest for testing
- ESLint for code quality
- Prettier for code formatting
- Git and GitHub for version control

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/taurajames/iyf-s12-week-07-taurajames.git
```

### 2. Open the project folder

```bash
cd iyf-s12-week-07-taurajames
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run tests

```bash
npm test
```

### 5. Check code quality

```bash
npm run lint
```

### 6. Open the application

Open the main `index.html` file using VS Code Live Server.

To access the shopping cart, open `cart/index.html`.

## Testing

The project uses Vitest to test the To-Do List logic.

The tests cover:

- Adding tasks.
- Rejecting empty tasks.
- Completing and deleting tasks.
- Editing tasks.
- Filtering tasks.
- Clearing completed tasks.
- Counting active tasks.
- Ensuring original arrays are not modified.

Run the tests using:

```bash
npm test
```

## Project Structure

The project is organized into the following folders and files:

### 1. Main Application

- `index.html` - Main To-Do List page.
- `styles.css` - Application styling.

### 2. JavaScript Modules (`js/`)

- `app.js` - Controls application events.
- `state.js` - Manages application state.
- `storage.js` - Handles LocalStorage.
- `todo-logic.js` - Contains task management functions.
- `ui.js` - Handles displaying tasks.

### 3. Shopping Cart (`cart/`)

- `index.html` - Shopping cart page.
- `cart.css` - Shopping cart styling.
- `cart.js` - Shopping cart functionality.

### 4. Tests (`tests/`)

- `todo-logic.test.js` - Tests the To-Do List functions.

### 5. Daily Challenges (`daily-challenges/`)

- Day 1: Persistent Theme Toggle.
- Day 2: Search History.
- Day 3: Auto-Saving Form.
- Day 4: JavaScript Refactoring.
- Day 5: Weather Dashboard Review.

### 6. Project Configuration

- `package.json` - Project dependencies and scripts.
- `eslint.config.js` - ESLint configuration.
- `.prettierrc` - Prettier formatting rules.
- `.gitignore` - Files excluded from Git.

## Live Demo

[View the live To-Do List](https://taurajames.github.io/iyf-s12-week-07-taurajames/)
## Collaboration

- My refactoring PR: [Refactor To-Do app into modules](https://github.com/taurajames/iyf-s12-week-07-taurajames/pull/1)
- My partner's PR review: [Review of James's To-Do app](https://github.com/jamesmwangi96ismyhandle-source/iyf-s12-week-07-jamesmwangi96ismyhandle-source/pull/1)

## Author

**Taura James**

GitHub: [taurajames](https://github.com/taurajames)

## Acknowledgements

Developed as part of the **IYF Season 12 Web Development Program**.

This project represents my practical learning in JavaScript, web development, modular programming, testing and version control.

