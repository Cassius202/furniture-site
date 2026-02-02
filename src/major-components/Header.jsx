import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { cn } from "../utils/cn";
import ThemeToggle from "./ThemeToggle";
import { Sidebar } from "lucide-react";
import { useAppProps } from "../hooks/useAppProps";
import { CgShoppingCart } from "react-icons/cg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "motion/react";

const navLinks = ["Home", "Products", "Reviews", "Work", "Contact Us"];

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useAppProps();
  const [scrolled, setScrolled] = useState(false);
  const [isAboveFold, setIsAboveFold] = useState(true);
  const sm = useMediaQuery('(max-width:700px)');
  const xs = useMediaQuery('(max-width:640px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      setScrolled(scrollY > 50);
      setIsAboveFold(scrollY <= viewportHeight);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide header timeout for desktop
  useEffect(() => {
    if (sm) return;

    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        setScrolled(false);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [sm, scrolled]);

  const shouldHideHeader = !scrolled && !sm && !isAboveFold;
  const showLogoOnMobile = isAboveFold && xs;

  return (
    <motion.header
      initial={{ opacity: 0, y: -64 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex z-50 w-screen h-16 fixed top-0 left-0 justify-between items-center text-gray-50 px-5 md:px-8 lg:px-18 transition-all duration-300",
        scrolled && !xs && "bg-black/50 backdrop-blur-sm backdrop-grayscale",
        shouldHideHeader && 'py-0 overflow-hidden h-0',
        xs && "max-sm:bg-transparent"
      )}
      role="banner"
    >
      {/* Logo Section */}
      <div 
        className={cn(
          "first-section flex",
          !showLogoOnMobile && xs && "max-sm:pointer-events-none max-sm:invisible max-sm:opacity-0",
          showLogoOnMobile && "max-sm:visible max-sm:scale-80 max-sm:-translate-x-3 transition-transform"
        )}
      >
        <a href="#home" className="logo flex items-center gap-1" aria-label="Rose Home - Go to homepage">
          <div className="brightness-1000% h-8">
            <img src={assets.logo} alt="Rose Home Logo" className="h-full w-auto" />
          </div>
          <span className="text-2xl font-semibold">Rose Home</span>
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="middle-section flex items-center max-lg:hidden" aria-label="Main navigation">
        <ul className="flex gap-x-6 list-none m-0 p-0">
          {navLinks.map((link) => {
            const href = `#${link.split(" ")[0].toLowerCase()}`;
            return (
              <li key={link} className="group relative">
                <a 
                  href={href}
                  className="text-slate-50 hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
                <span 
                  className="absolute h-0.5 w-0 top-[101%] left-0 bg-primary origin-left transition-[width] duration-250 group-hover:w-full"
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-x-4">
        <ThemeToggle className="max-sm:hidden" />
        
        <button 
          className={cn(
            'bg-primary text-white rounded-full flex gap-x-2 items-center py-2 px-4 hover:bg-primary/90 transition-colors',
            sm && 'hidden'
          )}
          aria-label="Shop now"
        >
          <CgShoppingCart size={20} className="max-lg:hidden" aria-hidden="true" />
          <span>Shop now</span>
        </button>
        
        <button 
          className={cn(
            "relative lg:hidden group transition-all",
            !xs && 'btn-ghost',
            xs && 'p-2 mr-1 -translate-y-1 bg-blue-100 dark:bg-slate-900 rounded-lg hover:bg-blue-200 dark:hover:bg-slate-800',
            sidebarOpen && 'invisible opacity-0'
          )}
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(true);
          }}
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
        >
          <Sidebar 
            className={cn(
              "text-slate-50 hover:text-blue-300 transition-colors",
              sm && "dark:text-slate-100 text-gray-950"
            )}
            aria-hidden="true"
          />
          <span className="tooltip right-[70%]" role="tooltip">
            Expand Navbar
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;