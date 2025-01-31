import { Link } from "react-router-dom"

interface BlogCardProps {
  authorName: string
  title: string
  content: string
  publishedDate: string
  id: number
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <article className="py-6 group cursor-pointer border-b">
        <div className="flex items-center gap-2 mb-2">
          <Avatar name={authorName} />
          <span className="text-sm text-gray-700">{authorName}</span>
          <Circle />
          <time className="text-sm text-gray-500">{publishedDate}</time>
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-gray-700">{title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-2">{content}</p>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </article>
    </Link>
  )
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-gray-500"></div>
}

export function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full ${size === "small" ? "w-8 h-8" : "w-10 h-10"}`}
    >
      <span className={`${size === "small" ? "text-sm" : "text-base"} font-medium text-gray-600`}>
        {name[0].toUpperCase()}
      </span>
    </div>
  )
}

