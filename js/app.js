
import {
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    clearCompleted
} from "./todo-logic.js";

import {
    tasks,
    currentFilter,
    updateTasks,
    updateFilter
} from "./state.js";

import { saveData, loadData } from "./storage.js";
import { renderTasks } from "./ui.js";

// Select HTML elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedButton = document.querySelector("#clear-completed");

// Render tasks and save application data
function renderAndSave() {
    renderTasks(tasks, currentFilter);
    saveData(tasks, currentFilter);
}

// Load previously saved data
const savedData = loadData();

updateTasks(savedData.tasks);
updateFilter(savedData.currentFilter);

renderTasks(tasks, currentFilter);

// Add new tasks
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    updateTasks(addTask(tasks, taskText));

    todoInput.value = "";

    renderAndSave();
});

// Complete and delete tasks
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
        updateTasks(deleteTask(tasks, taskId));

    } else if (event.target.classList.contains("todo-text")) {
        updateTasks(toggleTask(tasks, taskId));

    } else {
        return;
    }

    renderAndSave();
});

// Edit tasks by double-clicking
todoList.addEventListener("dblclick", function (event) {
    const taskText = event.target.closest(".todo-text");

    if (!taskText) {
        return;
    }

    const taskItem = taskText.closest(".todo-item");
    const taskId = Number(taskItem.dataset.id);

    const task = tasks.find(function (item) {
        return item.id === taskId;
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

    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const updatedText = editInput.value.trim();

            if (updatedText === "") {
                alert("Task cannot be empty.");
                return;
            }

            updateTasks(editTask(tasks, taskId, updatedText));

            renderAndSave();

        } else if (event.key === "Escape") {
            renderTasks(tasks, currentFilter);
        }
    });
});

// Filter tasks
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        updateFilter(button.dataset.filter);

        renderAndSave();
    });
});

// Clear completed tasks
clearCompletedButton.addEventListener("click", function () {
    updateTasks(clearCompleted(tasks));

    renderAndSave();
});
