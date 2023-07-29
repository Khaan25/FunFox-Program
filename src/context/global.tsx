"use client"

import { createContext, ReactNode, useContext, useState } from "react"

import { task, TasksProps, UpdateTaskContextProps } from "@/types/context"
import {
  deleteTaskLocalStorage,
  getTasks,
  setTaskLocalStorage,
} from "@/lib/tasks"
import { useToast } from "@/components/ui/use-toast"

const TaskContext = createContext<TasksProps>({ tasks: [] })

const PinContextUpdate = createContext<UpdateTaskContextProps | null>(null)

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a PinContext.Provider")
  }
  return context
}

export function useTaskUpdateContext() {
  const context = useContext(PinContextUpdate)
  if (context === null) {
    throw new Error(
      "useTaskUpdateContext must be used within a PinContextUpdate.Provider"
    )
  }
  return context
}

export function PinContextProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast()
  const [tasks, setTasks] = useState<TasksProps>({
    tasks: getTasks(),
    // Add more...
  })

  function refetchTasks() {
    setTasks({ tasks: getTasks() })
  }

  function addTask(task: task) {
    setTaskLocalStorage(task)
    refetchTasks()
    toast({ description: "Task added successfully!" })
  }

  function editTask(task: task) {
    setTaskLocalStorage(task)
    refetchTasks()
    toast({ description: "Task updated successfully!" })
  }

  function deleteTask(task: task) {
    deleteTaskLocalStorage(task)
    refetchTasks()
    toast({ description: "Task deleted successfully!" })
  }

  function deleteAlTasks() {
    setTasks({ tasks: [] })
    toast({ description: "All Tasks deleted successfully!" })
  }

  return (
    <TaskContext.Provider value={tasks}>
      <PinContextUpdate.Provider
        value={{ addTask, editTask, deleteTask, deleteAlTasks, refetchTasks }}
      >
        {children}
      </PinContextUpdate.Provider>
    </TaskContext.Provider>
  )
}
