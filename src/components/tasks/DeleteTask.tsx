"use client"

import { Dispatch, SetStateAction } from "react"
import { useTaskUpdateContext } from "@/context/global"
import { Trash } from "lucide-react"

import { task } from "@/types/context"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function DeleteTask({ task, open, setOpen }: { task: task; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
  const { deleteTask } = useTaskUpdateContext()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <div className="flex items-center gap-2">
          <Trash size="15" /> Delete Task
        </div> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete {task.title}</DialogTitle>
          <DialogDescription>Are you sure you want to delete all tasks? This actions is irreversible.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 mt-4 gap-4">
          <Button onClick={() => setOpen(false)} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteTask(task)
              setOpen(false)
            }}
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
