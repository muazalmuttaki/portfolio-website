 import { useState } from "react";
import Logo from "./logo";
import { NavMenu } from "@/components/ui/nav-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white/10 dark:bg-black/30 fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200/50 dark:border-slate-700/70">
      <nav className="h-16 md:h-14 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 md:gap-6">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <NavMenu />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="ml-4 mt-0 text-orange-300/80 border-orange-300/80 hover:bg-orange-100/20 hover:text-white"
          >
            Contact Me
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 w-full shadow-lg z-40 animate-slideDown">
          <NavMenu />

          <Button
            variant="outline"
            className="text-orange-300/80 border-orange-300/80 hover:bg-orange-100/20 hover:text-white"
          >
            Resume
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
