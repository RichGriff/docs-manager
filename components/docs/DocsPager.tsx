'use client'

import Link from "next/link"
import { Project } from "contentlayer/generated"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projectsConfig } from "@/config/projects"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface DocsPagerProps {
  doc: Project
}

export function DocsPager({ doc }: DocsPagerProps) {
  const [navItems, setNavItems] = useState<any>([])
  const pathname = usePathname()

  useEffect(() => {
    const root = (pathname.replace('/', '').split('/').length == 1)

    if(!root) {
      console.log('PATH', pathname)
      let slug = pathname.replace('/', '').split('/')[1]
      const project = projectsConfig.projects.filter(p => p.slug === slug)[0]
      setNavItems(project.sidebarNav)
    }
  },[])

  const pager = getPagerForDoc(doc, navItems)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
        >
          {pager.next.title}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Project, navItems: any) {
  const flattenedLinks = [null, ...flatten(navItems), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

//@ts-ignore
export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}