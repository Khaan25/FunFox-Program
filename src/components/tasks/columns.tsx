"use client"

import { ColumnDef } from "@tanstack/react-table"

import { task } from "@/types/context"
import { cn } from "@/lib/utils"

import { TaskRowActions } from "./TaskRowActions"

export const columns: ColumnDef<task>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isCompleted",
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const isCompleted = row.getValue("isCompleted") as boolean

      return <div className={cn("text-right font-medium text-red-500", isCompleted && "text-green-500")}>{isCompleted ? "Completed" : "Incomplete"}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <TaskRowActions row={row} />,
  },
]
