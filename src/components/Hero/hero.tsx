 
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
 

 function Hero() {
  return (
    <div className="pt-18 flex items-center justify-center  relative bg-gray-900 text-white   overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div className="absolute inset-0 bg-oklch(70.4% 0.04 256.788) via-[#6C63FF]/10 to-transparent  ">

        </div>

        {/* Left Content */}
        <div  >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-orange-300/80 mb-4">
            Hi there !
          </h1>
          <h2 className="text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
             I'm Muaz Al Muttaki
          </h2>
          <h4 className="mt-2 text-2xl md:text-3xl font-bold tracking-tighter leading-tight">
           Frontend web Developer
          </h4>

          <p className="mt-6 max-w-[60ch] sm:text-lg text-muted-foreground">
          I'm a frontend developer focused on clean, fast, user-friendly interfaces. Browse Shadcn UI components to boost your workflow.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xl text-gray-300 ml-30">
               <FaFacebook className="hover:text-blue-500 transition-colors duration-200 cursor-pointer text-xl" />
               <FaLinkedin className="hover:text-blue-500 transition-colors duration-200 cursor-pointer text-xl" />
               <FaGithub className="hover:text-blue-500 transition-colors duration-200 cursor-pointer text-xl" />
               <FaEnvelope className="hover:text-blue-500 transition-colors duration-200 cursor-pointer text-xxl" />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 ml-20">
            <Button variant="outline">
              Resume
            </Button>

            <Button variant="outline">
             Contact Me
            </Button>
          </div>
        </div>
 
        {/* Right Image */}
        <div className="w-full h-[400px] aspect-video rounded-xl overflow-hidden bg-accent flex items-center justify-center">
          <img
            src="image/(6).png"
            alt="Preview"
            className="object-cover w-full h-full"
          />
        </div>

      </div>

   


    </div>
  );
}
export default  Hero;