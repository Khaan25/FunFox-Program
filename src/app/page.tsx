"use client"

import Link from "next/link"
import { useTaskContext } from "@/context/global"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/pageHeader"
import { columns } from "@/components/tasks/columns"
import CreateTask from "@/components/tasks/CreateTask"
import { TasksTablev2 } from "@/components/tasks/TasksTablev2"
import TechStack from "@/components/TechStack"

export default function Home() {
  const { tasks } = useTaskContext()
  return (
    <div className="container relative">
      <PageHeader className="page-header pb-0">
        <TechStack />
        <PageHeaderHeading>Task Management System</PageHeaderHeading>
        <PageHeaderDescription>Task time! Create, edit, delete - you're in charge! Check out your tasks in a cool table below. Let's rock those to-dos!</PageHeaderDescription>
        <p className="text-muted-foreground">
          Discover the endless possibilities with our API! (If we built one) 🌟 By harnessing its power, we can effortlessly access todos with their respective titles, descriptions, and associated usernames. Now, here comes the exciting part: using a select box, you can easily filter the table based
          on different usernames. 🎛️ Embrace the flexibility and take your todo management to the next level! 🚀
        </p>
        <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <CreateTask />
          <a href="mailto:ziaurzai@gmail.com" className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}>
            React out to Me
          </a>
        </section>
      </PageHeader>

      <section className="mb-8">{tasks === null || tasks.length === 0 ? <h1 className="text-center py-8 rounded-md border shadow bg-background">No Tasks, Add some tasks to see here.</h1> : <TasksTablev2 columns={columns} data={tasks} />}</section>
    </div>
  )
}
