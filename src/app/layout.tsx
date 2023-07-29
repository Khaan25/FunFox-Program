import { TaskContextProvider } from "@/context/global"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { ThemeProvider } from "@/providers/ThemeProvider"

import { siteConfig } from "@/config/site"
import { interFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Server Components"],
  authors: [
    {
      name: "Zia Ur Rehman Khan",
      url: "https://zia.vennsol.pk",
    },
  ],
  creator: "Zia Ur Rehman Khan",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@zia_webdev",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", interFont.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TaskContextProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <Toaster />
          </TaskContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
