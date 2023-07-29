"use client"

import { useState } from "react"
import { useTaskUpdateContext } from "@/context/global"
import { Row } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"

import { task } from "@/types/context"

import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import DeleteTask from "./DeleteTask"
import EditTask from "./EditTask"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function TaskRowActions<TData>({ row }: DataTableRowActionsProps<task>) {
  const task = row.original
  const { toggleComplete } = useTaskUpdateContext()
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-1" onClick={() => toggleComplete(task)}>
            Mark as
            <span className={task.isCompleted ? "text-red-500" : "text-green-500"}>{task.isCompleted ? "In Complete" : "Complete"}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenEdit(true)}>
            <div className="flex items-center gap-2">
              <Pencil size="15" /> Edit Task
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenDelete(true)}>
            <div className="flex items-center gap-2">
              <Trash size="15" /> Delete Task
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Separated this so that It can be accessible after clicking on DropdownMenuItem */}
      <EditTask task={task} open={openEdit} setOpen={setOpenEdit} />
      <DeleteTask task={task} open={openDelete} setOpen={setOpenDelete} />
    </>
  )
}
