import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, Github, Twitter, Youtube } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "./Icons"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Separator } from "./ui/separator"

export default function TechStack() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href="/" className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          🎉 <Separator className="mx-1 h-4" orientation="vertical" /> <span className="inline">Checkout Tech Stack used</span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Tech Stack 🔥</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-3 my-2">
              <div className="flex items-center">
                <Github className="w-5 h-5" />
                <Link className="ml-1 underline underline-offset-4 hover:underline-offset-2 transition-all duration-300" href={siteConfig.links.github}>
                  GitHub
                </Link>
              </div>

              <div className="flex items-center">
                <Twitter className="w-5 h-5" />
                <Link className="ml-1 underline underline-offset-4 hover:underline-offset-2 transition-all duration-300" href={siteConfig.links.twitter}>
                  Twitter
                </Link>
              </div>

              <div className="flex items-center">
                <Youtube className="w-5 h-5" />
                <Link className="ml-1 underline underline-offset-4 hover:underline-offset-2 transition-all duration-300" href={siteConfig.links.youtube}>
                  YouTube
                </Link>
              </div>
            </div>

            <p className="my-2 mt-4 leading-6">
              Tech Stack Turbocharged: Next.js frontend, Tailwind CSS for stylish vibes, Radix UI for accessibility magic, plus solid principles, modular coding, best practices, and all the juicy stuff you crave! Add tasks, explore table options - it's a thrilling ride!
            </p>

            <hr className="my-4" />

            <div className="my-2 font-semibold">
              <h4 className="text-base font-semibold">Built with</h4>
              <div className="flex flex-wrap sm:grid justify-around sm:grid-cols-4 mt-4 gap-y-6 gap-x-3">
                <div className="flex items-center gap-2">
                  <Image alt="nextjs" src="/images/nextjs.png" width={35} height={35} />
                  <span className="">Next.js</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image alt="tailwind" src="/images/tailwind.png" width={35} height={35} />
                  <span className="">Tailwind</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image alt="tailwind" src="/images/radixui.png" className="invert mix-blend-lighten" width={25} height={25} />
                  <span className="">Radix UI</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icons.lucide />
                  <span className="">Lucide Icons</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image alt="typescript" src="/images/typescript.png" width={30} height={30} />
                  <span className="">TypeScript</span>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
