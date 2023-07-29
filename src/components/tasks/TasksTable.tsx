"use client"

import { Children } from "react"
import { useTaskContext } from "@/context/global"
import { Pencil, Trash } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import DeleteTask from "./DeleteTask"
import EditTask from "./EditTask"

export default function TasksTable() {
  const { tasks } = useTaskContext()
  console.log("tasks :", tasks)

  return tasks === null || tasks.length === 0 ? (
    <h1 className="text-center py-8">No Tasks, Add some tasks to see here.</h1>
  ) : (
    <Table>
      <TableCaption>A list of your recent tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="w-[140px]">Is Completed</TableHead>
          <TableHead className="text-center w-[30px]">Edit</TableHead>
          <TableHead className="text-center w-[50px]">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Children.toArray(
          tasks.map((task) => (
            <TableRow>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell
                className={cn(
                  "text-red-500",
                  task.isCompleted && "text-green-500"
                )}
              >
                {task.isCompleted ? "Completed" : "Incomplete"}
              </TableCell>
              <TableCell className="text-center">
                <EditTask task={task} />
              </TableCell>
              <TableCell className="text-center">
                <DeleteTask task={task} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
