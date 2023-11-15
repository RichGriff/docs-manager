import { Icons } from "@/components/Icons"
import Link from "next/link"

import { MainNav } from "@/components/docs/MainNav"
import { DocsSidebarNav } from "@/components/docs/DocSidebarNav"
import { LoggedInUser } from "@/components/LoggedInUser"
import { Footer } from "@/components/Footer"
import { projectsConfig } from "@/config/projects"
import { ThemeToggle } from "@/components/ThemeToggle"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Navigation from "@/components/Navigation"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Navigation />
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              {/* <DocsSearch /> */}
            </div>
            <nav className="flex space-x-4">
              <LoggedInUser />
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <Footer />
    </div>
  )
}