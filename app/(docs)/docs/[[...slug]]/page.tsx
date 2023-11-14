import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css"
import { DocTableOfContents } from "@/components/docs/DocTableOfContents"
import { DocsPageHeader } from "@/components/docs/DocsPageHeader"
import { DocsPager } from "@/components/docs/DocsPager"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-component"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params)

  if (!doc) {
    return {}
  }

  const url = 'http://locahost:3000/'

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", doc.description ?? doc.title)
  ogUrl.searchParams.set("type", "Documentation")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      // url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) {
    notFound()
  }

  // const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          {/* <DocTableOfContents toc={toc}/> */}
          DashboardTableOfContents
        </div>
      </div>
    </main>
  )
}