"use client"

import { task, tasks } from "@/types/context"

const TASKS_KEY = "tasks"

export const getTasks = () => {
  // Check if localStorage is available in the current environment.
  const isLocalStorageAvailable = typeof localStorage !== "undefined"

  if (!isLocalStorageAvailable) {
    console.warn("localStorage is not available in this environment.")
    return []
  }

  const rawTasks = localStorage.getItem(TASKS_KEY)
  if (!rawTasks) return []

  const tasks = JSON.parse(rawTasks)
  return tasks
}

export const setTaskLocalStorage = (task: task) => {
  // Retrieve existing tasks from localStorage
  const existingTasksJSON = localStorage.getItem(TASKS_KEY)
  const existingTasks: tasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : []

  // Check if the task ID already exists in the existing tasks
  const existingTaskIndex = existingTasks.findIndex((t) => t.id === task.id)

  if (existingTaskIndex !== -1) {
    // If the ID exists, overwrite the existing task with the new task
    existingTasks[existingTaskIndex] = task
  } else {
    // If the ID does not exist, create a new task and append it to the existing tasks
    existingTasks.push(task)
  }

  // Store the updated tasks back in localStorage
  localStorage.setItem(TASKS_KEY, JSON.stringify(existingTasks))
}

export const deleteTaskLocalStorage = (task: task) => {
  // Retrieve existing tasks from localStorage
  const existingTasksJSON = localStorage.getItem(TASKS_KEY)
  const existingTasks: tasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : []

  // Find the index of the task with the given ID
  const taskIndex = existingTasks.findIndex((t) => t.id === task.id)

  if (taskIndex !== -1) {
    // If the task with the given ID is found, remove it from the existing tasks
    existingTasks.splice(taskIndex, 1)

    // Store the updated tasks back in localStorage
    localStorage.setItem(TASKS_KEY, JSON.stringify(existingTasks))
  } else {
    // If the task with the given ID is not found, do nothing or handle the error accordingly
    // For example, you could throw an error or display a message to the user.
    // For simplicity, this example doesn't throw an error or handle the not-found case.
  }
}

export const toggleTaskStatusLocalStorage = (task: task) => {
  // Retrieve existing tasks from localStorage
  const existingTasksJSON = localStorage.getItem(TASKS_KEY)
  const existingTasks: tasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : []

  // Find the task with the given ID
  const taskToToggle = existingTasks.find((t) => t.id === task.id)

  if (taskToToggle) {
    // If the task with the given ID is found, toggle its status
    taskToToggle.isCompleted = !taskToToggle.isCompleted

    // Store the updated tasks back in localStorage
    localStorage.setItem(TASKS_KEY, JSON.stringify(existingTasks))
  } else {
    // If the task with the given ID is not found, do nothing or handle the error accordingly
    // For example, you could throw an error or display a message to the user.
    // For simplicity, this example doesn't throw an error or handle the not-found case.
  }
}

export const deleteAllTasksLocalStorage = () => {
  localStorage.removeItem(TASKS_KEY)
}
