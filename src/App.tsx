 import AboutMe from "@/components/About/about"
import Contact from "@/components/contact/contact"
import Footer from "@/components/Footer/footer"
import Hero from "@/components/Hero/hero"
import Navbar from "@/components/navbar/navbar"
import Projects from "@/components/project/project"
import Skills from "@/components/Skill/skill"
 

function App() {
   

  return (
    <>
       <Navbar />
       <Hero />
       <AboutMe />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </>
  )
}

export default App
