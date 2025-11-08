import { useState } from "react";
import { NavMenu } from "@/components/ui/nav-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white/10 dark:bg-black/30 fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200/50 dark:border-slate-700/70">
      <nav className="h-16 md:h-14 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 md:gap-6">
          <img src="/image/logo.png" alt="Logo" className="rounded-full h-10 w-10" />
          <span className="text-wite">WEB DEVELOPER</span>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 justify-center">
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
      </nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 w-full shadow-lg z-40 animate-slideDown">
          <NavMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
