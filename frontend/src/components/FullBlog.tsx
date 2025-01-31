import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-white">
      <Appbar />
      <main className="pt-20 pb-16">
        <article className="max-w-[692px] mx-auto px-6">
          <h1 className="text-[42px] font-serif leading-tight mb-8 text-gray-900 font-bold tracking-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Avatar size="big" name={blog.author.name || "Anonymous"} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{blog.author.name || "Anonymous"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <span>1 min read</span>
                  <span>·</span>
                  <time>Dec 2, 2023</time>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">{blog.content}</div>
        </article>
      </main>
    </div>
  )
}

