
import { DocsSidebarNav } from "@/components/docs/DocSidebarNav"
// import { projectsConfig } from "@/config/projects"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="scrollbar-hide fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
        <DocsSidebarNav />
        {/* <DocsSidebarNav items={projectsConfig.sidebarNav} /> */}
      </aside>
      {children}
    </div>
  )
}