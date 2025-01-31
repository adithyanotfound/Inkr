import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"
import { Landing } from "./pages/Landing"
import { Toaster } from "sonner"
import type React from "react" // Added import for React

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token")
  if (!token) {
    return <Navigate to="/signin" replace />
  }
  return children
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected routes */}
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publish"
          element={
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

