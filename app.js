
// ==========================================
// STEP 1: SELECT HTML ELEMENTS
// ==========================================

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const itemsLeft = document.querySelector("#items-left");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedButton = document.querySelector("#clear-completed");


// ==========================================
// STEP 2: STORE TASKS IN AN ARRAY
// ==========================================

let tasks = [];
let currentFilter = "all";


// ==========================================
// STEP 3: DISPLAY TASKS ON THE PAGE
// ==========================================

function renderTasks() {
    todoList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(function (task) {
            return !task.completed;
        });
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(function (task) {
            return task.completed;
        });
    }

    // Display each task
    filteredTasks.forEach(function (task) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.dataset.id = task.id;

        if (task.completed) {
            li.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.classList.add("todo-text");
        taskText.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.type = "button";

        li.appendChild(taskText);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });

    // Update remaining task count
    const remainingTasks = tasks.filter(function (task) {
        return !task.completed;
    }).length;

    itemsLeft.textContent = remainingTasks +
        (remainingTasks === 1 ? " item left" : " items left");
}


// ==========================================
// STEP 4: ADD NEW TASKS
// ==========================================

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    todoInput.value = "";

    renderTasks();
});

  
// ==========================================
// STEP 5: COMPLETE AND DELETE TASKS
// ==========================================

todoList.addEventListener("click", function (event) {

    // Ignore the second click of a double-click
    if (event.detail > 1) {
        return;
    }

    const taskItem = event.target.closest(".todo-item");

    if (!taskItem) {
        return;
    }

    const taskId = Number(taskItem.dataset.id);

    if (event.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(function (task) {
            return task.id !== taskId;
        });

    } else if (event.target.classList.contains("todo-text")) {
        tasks = tasks.map(function (task) {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }

            return task;
        });
    }

    renderTasks();
});


// ==========================================
// BONUS: EDIT TASKS
// ==========================================

todoList.addEventListener("dblclick", function (event) {
    console.log("Double-click detected!");
    const taskText = event.target.closest(".todo-text");

    if (!taskText) {
        return;
    }

    const taskItem = taskText.closest(".todo-item");
    const taskId = Number(taskItem.dataset.id);

    const task = tasks.find(function (task) {
        return task.id === taskId;
    });

    if (!task) {
        return;
    }

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.text;
    editInput.classList.add("edit-input");

    taskText.replaceWith(editInput);

    editInput.focus();
    editInput.select();

    // Save or cancel editing
    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const updatedText = editInput.value.trim();

            if (updatedText === "") {
                alert("Task cannot be empty.");
                return;
            }

            task.text = updatedText;
            renderTasks();

        } else if (event.key === "Escape") {
            renderTasks();
        }
    });
});


// ==========================================
// STEP 6: FILTER TASKS
// ==========================================

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});


// ==========================================
// STEP 7: CLEAR COMPLETED TASKS
// ==========================================

clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    renderTasks();
});
