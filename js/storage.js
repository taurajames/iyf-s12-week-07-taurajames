
const STORAGE_KEY = "todo-app-data";

// Save tasks and filter
export function saveData(tasks, currentFilter) {
    const data = {
        tasks: tasks,
        currentFilter: currentFilter
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Could not save data:", error);
    }
}

// Load tasks and filter
export function loadData() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return {
                tasks: [],
                currentFilter: "all"
            };
        }

        const data = JSON.parse(savedData);

        if (
            !data ||
            typeof data !== "object" ||
            !Array.isArray(data.tasks) ||
            !["all", "active", "completed"].includes(data.currentFilter) ||
            !data.tasks.every(function (task) {
                return (
                    task &&
                    typeof task.id === "number" &&
                    typeof task.text === "string" &&
                    typeof task.completed === "boolean"
                );
            })
        ) {
            return {
                tasks: [],
                currentFilter: "all"
            };
        }

        return {
            tasks: data.tasks,
            currentFilter: data.currentFilter
        };

    } catch (error) {
        console.error("Could not load saved data:", error);

        return {
            tasks: [],
            currentFilter: "all"
        };
    }
}
