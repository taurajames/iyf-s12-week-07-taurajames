import { filterTasks, countActiveTasks } from "./todo-logic.js";

// Select HTML elements
const todoList = document.querySelector("#todo-list");
const itemsLeft = document.querySelector("#items-left");
const filterButtons = document.querySelectorAll(".filter-btn");

// Display tasks
export function renderTasks(tasks, currentFilter) {
    todoList.innerHTML = "";

    const visibleTasks = filterTasks(tasks, currentFilter);

    visibleTasks.forEach(function (task) {
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
    const remainingTasks = countActiveTasks(tasks);

    itemsLeft.textContent =
        remainingTasks + (remainingTasks === 1 ? " item left" : " items left");

    // Highlight selected filter
    filterButtons.forEach(function (button) {
        button.classList.toggle(
            "active",
            button.dataset.filter === currentFilter
        );
    });
}
