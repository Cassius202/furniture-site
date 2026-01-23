import { useAppProps } from "../hooks/useAppProps";
import ThemeToggle from "./ThemeToggle";
import { useRef } from "react";
import { cn } from "../utils/cn";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ChevronsLeft } from "lucide-react";

const navLinks = ["Home", "Products", "Reviews", "Work", "Contact Us"];

const Sidebar = () => {
  const { theme, sidebarOpen, setSidebarOpen } = useAppProps();
  const sidebarRef = useRef(null);

  const handleSidebarClose = (e) => {
    if (!sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };
  const sm = useMediaQuery('(max-width:700px)');
  return (
    <AnimatePresence>
      {sidebarOpen && 
      (<div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "fixed inset-0 z-60 backdrop-blur-[3px] darken transition-[width_colors]"
        )}
        onClick={handleSidebarClose}
      >
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          ref={sidebarRef}
          className={cn("light-gradient fixed dark:dark-gradient right-0 transition-colors duration-400 top-0 w-85 rounded-l-2xl z-60 h-screen", sm && "w-68")}
        >
          <span className="absolute top-2 right-6 btn-ghost rotate-180 dark:text-amber-200"
          onClick={() => setSidebarOpen(false)}
          >
            <ChevronsLeft />
          </span>
          <nav className={cn("pt-16 px-10 h-full flex flex-col pb-8", sm && 'px-6')}>
            <menu className="flex flex-col gap-y-8">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="group cursor-pointer text-slate-900 text-lg relative bg-slate-300 dark:bg-blue-950/40 hover:bg-blue-200 dark:text-slate-50 dark:hover:bg-slate-600 p-2 px-4 rounded-xl"
                  >
                    <a href={link.toLowerCase()}>{link}</a>
                  </li>
                );
              })}
            </menu>
            <div className="flex items-center gap-3 mt-auto">
              <button className="p-2 rounded-full bg-blue-900/60 dark:bg-slate-100">
                <ThemeToggle iconClass={"dark:text-slate-950 text-white"} />
              </button>
              <label className="text-slate-950 font-medium text-lg  dark:text-slate-100">{`Toggle ${
                theme === "dark" ? "light" : "dark"
              } theme`}</label>
            </div>
          </nav>
        </motion.aside>
      </div>)
      } 
    </AnimatePresence>
  );
};

export default Sidebar;
