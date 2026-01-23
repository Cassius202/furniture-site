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
  const sm = useMediaQuery('(max-width:700px)');
  const xs = useMediaQuery('(max-width:640px)');


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    };
    if (!sm) {
      setTimeout(() => setScrolled(false), 6000);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sm, scrolled]);


  return (
    <motion.header
     initial={{opacity: 0.6, y: -64}}
    animate={{opacity: 1, y: 0}}
      className={cn("flex z-50 w-screen h-16 fixed  justify-between bg text-gray-50 px-5 md:px-8 lg:px-18 transition-colors", scrolled && !xs && "bg-black/50 backdrop-grayscale-60 backdrop-blur-xs", !scrolled && !sm && (window.scrollY > window.innerHeight) && 'transition-[height_padding] py-0 overflow-hidden h-0', xs && "max-sm:bg-transparent max-sm:backdrop-grayscale-0 !max-sm:backdrop-blur-0")}
    >
      <div className={cn("first-section flex max-sm:pointer-events-none max-sm:invisible", (window.scrollY < window.innerHeight) && xs && 'max-sm:visible overflow-hidden scale-80 -translate-x-3')}>
        <div className="logo flex items-center">
          <div className={cn("brightness-1000 h-8")}>
            <img src={assets.logo} alt="" />
          </div>
          <span className="text-2xl font-semibold pl-1">Luxe Home</span>
        </div>
      </div>

      <nav className="middle-section flex items-center max-lg:hidden">
        <menu className="flex gap-x-6">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="group relative text-slate-50 hover:text-primary">
                <a href={`#${link.split(" ")[0].toLowerCase()}`}>{link}</a>
                <span className="absolute h-0.5 w-0 top-[101%] left-0 bg-slate-50 origin-left transition-[width] duration-250 group-hover:w-full group-hover:bg-primary  "></span>
              </li>
            );
          })}
        </menu>
      </nav>
      <div className="flex items-center gap-x-4 ">
        <button className="btn-ghost max-sm:hidden">
          <ThemeToggle />
        </button>
        <button className={cn('bg-primary rounded-full flex gap-x-1 items-center p-1.5 px-3', sm && 'hidden')}>
          <span className="max-lg:hidden">
            <CgShoppingCart size={20} />
          </span>
          Shop now
        </button>
        <button className={cn("relative lg:hidden group", !xs && 'btn-ghost', xs && 'p-2 mr-1  -translate-y-1 bg-blue-100 dark:bg-slate-900 rounded-lg', sidebarOpen && 'invisible')}
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(true)
          }}
        >
          <Sidebar className={cn("text-slate-50 hover:text-blue-300", sm && "dark:text-slate-100 text-gray-950")} />
          <span className={cn("tooltip right-[70%]")}>
            Expand Navbar
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
