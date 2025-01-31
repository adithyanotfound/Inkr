import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const Appbar = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem("token")
    toast.success("Successfully signed out!")
    navigate("/signin")
  }

  return (
    <div className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={"/blogs"} className="flex items-center">
            <h1 className="text-xl font-serif">Inkr</h1>
          </Link>

          <div className="flex items-center gap-4">
            <Link to={`/publish`}>
              <button
                type="button"
                className="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
              >
                Write
              </button>
            </Link>
            <button onClick={handleSignOut} className="text-red-600 cursor-pointer ml-3">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

