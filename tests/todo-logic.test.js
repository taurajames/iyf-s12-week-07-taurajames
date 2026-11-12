import { describe, it, expect } from "vitest";

import {
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    filterTasks,
    clearCompleted,
    countActiveTasks,
} from "../js/todo-logic.js";

const sampleTasks = [
    { id: 1, text: "Study JavaScript", completed: false },
    { id: 2, text: "Read a book", completed: true },
    { id: 3, text: "Practice coding", completed: false },
];

describe("To-Do List Logic", function () {
    it("should add a new task", function () {
        const result = addTask(sampleTasks, "Learn React", 4);

        expect(result).toHaveLength(4);
        expect(result[3].text).toBe("Learn React");
        expect(result[3].completed).toBe(false);
    });

    it("should reject an empty task", function () {
        const result = addTask(sampleTasks, "   ");

        expect(result).toBe(sampleTasks);
        expect(result).toHaveLength(3);
    });

    it("should toggle task completion", function () {
        const result = toggleTask(sampleTasks, 1);

        expect(result[0].completed).toBe(true);
        expect(sampleTasks[0].completed).toBe(false);
    });

    it("should delete a task", function () {
        const result = deleteTask(sampleTasks, 2);

        expect(result).toHaveLength(2);
        expect(result.some((task) => task.id === 2)).toBe(false);
    });

    it("should edit a task", function () {
        const result = editTask(sampleTasks, 1, "Study Python");

        expect(result[0].text).toBe("Study Python");
        expect(sampleTasks[0].text).toBe("Study JavaScript");
    });

    it("should filter active tasks", function () {
        const result = filterTasks(sampleTasks, "active");

        expect(result).toHaveLength(2);
        expect(result.every((task) => !task.completed)).toBe(true);
    });

    it("should clear completed tasks", function () {
        const result = clearCompleted(sampleTasks);

        expect(result).toHaveLength(2);
        expect(result.every((task) => !task.completed)).toBe(true);
    });

    it("should count active tasks", function () {
        const result = countActiveTasks(sampleTasks);

        expect(result).toBe(2);
    });
});
