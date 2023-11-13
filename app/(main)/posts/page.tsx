import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { FileCode } from 'lucide-react'

export default function TestPage() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
    <div className="grid grid-cols-3 gap-6 mt-6">
      {allPosts.map((post) => (
        <Link href={post.slug} key={post._id}>
          <div className="flex flex-col justify-start items-start border rounded-md p-4 group h-[225px]">
            <div className="inline-flex bg-gray-400/10 rounded-md p-2 mb-4 group-hover:text-indigo-500 transition-all dark:border-none">
              <FileCode className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-semibold mb-3 group-hover:text-indigo-500 transition-all">{post.title}</h2>
            {post.description && <p className="my-0 text-sm text-slate-400 line-clamp-2">{post.description}</p>}
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}
