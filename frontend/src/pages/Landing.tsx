import { useEffect, useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, BookOpen, Pen, ScrollText, Brain, Coffee, Globe } from "lucide-react"

export const Landing = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState(0)

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("[data-section]")
    const scrollPosition = window.scrollY + window.innerHeight / 2

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index)
        }

        if (scrollPosition >= sectionTop - window.innerHeight / 2) {
          section.querySelectorAll(".animate-on-scroll").forEach((el) => {
            el.classList.add("animate-fade-in")
          })
        }
      }
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/blogs")
    }

    window.addEventListener("scroll", handleScroll)
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navigate, handleScroll])

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index ? "bg-black h-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>

      <header className="fixed top-0 left-0 right-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm z-40">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-serif">
              Inkr
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/signin" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-sm text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section data-section="0" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-yellow-100/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-green-100/30 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-8xl font-serif mb-8 leading-tight animate-on-scroll [opacity:0]">
                Where good ideas find you.
              </h1>
              <p className="text-2xl text-gray-600 mb-12 max-w-xl leading-normal animate-on-scroll [opacity:0] delay-300">
                Read and share new perspectives on just about any topic. Everyone's welcome.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 text-white bg-black px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-transform hover:scale-105 animate-on-scroll [opacity:0] delay-500"
              >
                Get started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section
          data-section="1"
          className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-yellow-50"
        >
          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <ScrollText className="h-12 w-12 text-orange-500 animate-on-scroll [opacity:0]" />
                <h2 className="text-4xl md:text-5xl font-serif animate-on-scroll [opacity:0] delay-300">
                  Stories that make you think
                </h2>
                <p className="text-xl text-gray-600 animate-on-scroll [opacity:0] delay-500">
                  Dive into different perspectives and fresh approaches. Find stories that challenge your assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          data-section="2"
          className="min-h-screen flex items-center bg-gradient-to-bl from-blue-50 to-indigo-50"
        >
          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent z-10" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-lg shadow-sm aspect-square flex items-center justify-center animate-on-scroll [opacity:0]"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      <Brain className="h-8 w-8 text-blue-500" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <Coffee className="h-12 w-12 text-blue-500 animate-on-scroll [opacity:0]" />
                <h2 className="text-4xl md:text-5xl font-serif animate-on-scroll [opacity:0] delay-300">
                  Knowledge sharing reimagined
                </h2>
                <p className="text-xl text-gray-600 animate-on-scroll [opacity:0] delay-500">
                  Share your expertise. Learn from others. Join a community of curious minds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section data-section="3" className="min-h-screen flex items-center bg-black text-white">
          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <Globe className="h-16 w-16 mx-auto text-white/80 animate-on-scroll [opacity:0]" />
              <h2 className="text-4xl md:text-6xl font-serif animate-on-scroll [opacity:0] delay-300">
                Join a community of curious minds
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-on-scroll [opacity:0] delay-500">
                Over 100 million readers and writers. Join them. Share your thinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors animate-on-scroll [opacity:0] delay-700"
                >
                  Start writing
                  <Pen className="h-5 w-5" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors animate-on-scroll [opacity:0] delay-900"
                >
                  Start reading
                  <BookOpen className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

