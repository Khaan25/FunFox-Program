"use client"

import { useTaskContext } from "@/context/global"

import DeleteTasks from "./DeleteTasks"

export default function TableActions() {
  const { tasks } = useTaskContext()

  return tasks === null || tasks.length === 0 ? null : (
    <div className="flex items-center justify-end gap-4">
      <DeleteTasks />
    </div>
  )
}
