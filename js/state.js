
export let tasks = [];
export let currentFilter = "all";

// Update the tasks
export function updateTasks(newTasks) {
    tasks = newTasks;
}

// Update the current filter
export function updateFilter(newFilter) {
    currentFilter = newFilter;
}
