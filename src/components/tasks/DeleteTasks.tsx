"use client"

import { useState } from "react"
import { useTaskUpdateContext } from "@/context/global"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function DeleteTasks() {
  const [open, setOpen] = useState(false)
  const { deleteAlTasks } = useTaskUpdateContext()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="whitespace-nowrap">
          Delete All
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete All Tasks</DialogTitle>
          <DialogDescription>Are you sure you want to delete all tasks? This actions is irreversible.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 mt-4 gap-4">
          <Button onClick={() => setOpen(false)} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteAlTasks()
              setOpen(false)
            }}
            variant="destructive"
          >
            Delete All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
