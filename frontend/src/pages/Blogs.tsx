import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const { loading, blogs } = useBlogs()

  return (
    <div className="min-h-screen bg-white">
      <Appbar />
      <main className="max-w-screen-md mx-auto px-4 pt-20">
        <div className="divide-y divide-gray-200">
          {loading ? (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}

