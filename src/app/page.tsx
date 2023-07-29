import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/pageHeader"
import CreateTask from "@/components/tasks/CreateTask"
import TableActions from "@/components/tasks/TableActions"
import TasksTable from "@/components/tasks/TasksTable"

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader className="page-header pb-0">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="inline">Checkout Tech Stack used</span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>Task Management System</PageHeaderHeading>
        <PageHeaderDescription>
          You can create, edit, delete tasks you've created. You can view your
          tasks in the table below.
        </PageHeaderDescription>
        <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <CreateTask />
          <a
            href="mailto:ziaurzai@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-[6px]"
            )}
          >
            Hire Me
          </a>
        </section>
      </PageHeader>

      <section className="space-y-4">
        <TableActions />
        <div className="overflow-y-auto max-h-[450px] rounded-[0.5rem] border bg-background shadow">
          <TasksTable />
        </div>
      </section>
    </div>
  )
}
