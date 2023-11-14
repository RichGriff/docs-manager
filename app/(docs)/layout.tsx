import { Icons } from "@/components/Icons"
import Link from "next/link"

import { MainNav } from "@/components/docs/MainNav"
import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/docs/DocSidebarNav"
// import { siteConfig } from "@/config/site"
// import { Icons } from "@/components/icons"
// import { DocsSearch } from "@/components/search"
// import { SiteFooter } from "@/components/site-footer"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              {/* <DocsSearch /> */}
              DocSearch
            </div>
            <nav className="flex space-x-4">
              {/* <Link
                href={'/'}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.logo className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link> */}
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      {/* <SiteFooter className="border-t" /> */}
      Footer
    </div>
  )
}