export type TasksProps = { tasks: tasks }
export type tasks = task[]

export type task = {
  id: string
  title: string
  description: string
  isCompleted: boolean
}

export type UpdateTaskContextProps = {
  addTask: (task: task) => void
  editTask: (task: task) => void
  deleteTask: (task: task) => void
  toggleComplete: (task: task) => void
  deleteAlTasks: () => void
  refetchTasks: () => void
}
