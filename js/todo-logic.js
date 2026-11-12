
// Add a new task
export function addTask(tasks, text, id = Date.now()) {
    const trimmedText = text.trim();

    if (trimmedText === "") {
        return tasks;
    }

    const newTask = {
        id,
        text: trimmedText,
        completed: false
    };

    return [...tasks, newTask];
}

// Toggle task completion
export function toggleTask(tasks, taskId) {
    return tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });
}

// Delete a task
export function deleteTask(tasks, taskId) {
    return tasks.filter(function (task) {
        return task.id !== taskId;
    });
}

// Edit a task
export function editTask(tasks, taskId, newText) {
    const trimmedText = newText.trim();

    if (trimmedText === "") {
        return tasks;
    }

    return tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                ...task,
                text: trimmedText
            };
        }

        return task;
    });
}

// Filter tasks
export function filterTasks(tasks, filter) {
    if (filter === "active") {
        return tasks.filter(function (task) {
            return !task.completed;
        });
    }

    if (filter === "completed") {
        return tasks.filter(function (task) {
            return task.completed;
        });
    }

    return tasks;
}

// Clear completed tasks
export function clearCompleted(tasks) {
    return tasks.filter(function (task) {
        return !task.completed;
    });
}

// Count remaining tasks
export function countActiveTasks(tasks) {
    return tasks.filter(function (task) {
        return !task.completed;
    }).length;
}
