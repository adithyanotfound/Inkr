import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { type ChangeEvent, useState } from "react"
import { toast } from "sonner"

export const Publish = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [publishing, setPublishing] = useState(false)
  const navigate = useNavigate()

  const handlePublish = async () => {
    if (!title || !description) {
      toast.error("Please add a title and content to publish")
      return
    }

    try {
      setPublishing(true)
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content: description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      )
      toast.success("Published successfully!")
      navigate(`/blog/${response.data.id}`)
    } catch (error) {
      toast.error("Failed to publish. Please try again.")
      console.error(error)
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-serif ml-10 cursor-pointer" onClick={() => navigate(`/blogs`)}>Inkr</h1>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePublish}
                disabled={publishing || !title || !description}
                className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium mr-10"
              >
                {publishing ? "Publishing..." : "Publish"}
              </button>
              {/* <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="h-5 w-5 text-gray-600" />
              </button> */}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-md mx-auto px-4 py-12">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-4xl font-serif placeholder-gray-300 border-none focus:outline-none mb-8"
        />
        <TextEditor onChange={(e) => setDescription(e.target.value)} />
      </main>
    </div>
  )
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div className="relative">
      <textarea
        onChange={onChange}
        placeholder="Tell your story..."
        className="w-full min-h-[70vh] text-lg text-gray-800 placeholder-gray-400 border-none resize-none focus:outline-none"
      />
    </div>
  )
}

