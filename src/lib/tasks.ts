"use client"

import { task, tasks } from "@/types/context"

export const getTasks = () => {
  //   const [tasks, setTasks] = useState<tasks | []>([])

  //   function fetchTasks() {
  //     const tasks = localStorage.getItem("tasks")
  //     console.log("tasks localStorage:", JSON.parse(tasks!))

  //     if (tasks) setTasks(JSON.parse(tasks))
  //     setTasks([])
  //   }

  //   useEffect(() => {
  //     fetchTasks()
  //   }, [])

  //   return tasks

  const rawTasks = localStorage.getItem("tasks")

  if (!rawTasks) return []

  const tasks = JSON.parse(rawTasks)

  return tasks
}

export const setTaskLocalStorage = (task: task) => {
  // Retrieve existing tasks from localStorage
  const existingTasksJSON = localStorage.getItem("tasks")
  const existingTasks: tasks = existingTasksJSON
    ? JSON.parse(existingTasksJSON)
    : []

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
  localStorage.setItem("tasks", JSON.stringify(existingTasks))
}

export const deleteTaskLocalStorage = (task: task) => {
  // Retrieve existing tasks from localStorage
  const existingTasksJSON = localStorage.getItem("tasks")
  const existingTasks: tasks = existingTasksJSON
    ? JSON.parse(existingTasksJSON)
    : []

  // Find the index of the task with the given ID
  const taskIndex = existingTasks.findIndex((task) => task.id === task.id)

  if (taskIndex !== -1) {
    // If the task with the given ID is found, remove it from the existing tasks
    existingTasks.splice(taskIndex, 1)

    // Store the updated tasks back in localStorage
    localStorage.setItem("tasks", JSON.stringify(existingTasks))
  } else {
    // If the task with the given ID is not found, do nothing or handle the error accordingly
    // For example, you could throw an error or display a message to the user.
    // For simplicity, this example doesn't throw an error or handle the not-found case.
  }
}
