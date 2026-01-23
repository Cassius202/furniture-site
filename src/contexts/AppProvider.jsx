import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ( {children} ) => {
  const [theme, setTheme] = useLocalStorage('theme', 'system');
  //handling theme change
  useEffect(()=> {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'system') {
      setTheme(prefersDark ? 'dark' : 'light')
    };
  }, []);

  useEffect(()=> {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } 
  }, [theme]);

  //other props
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //creating the value object
  const value = {
    theme,
    setTheme,
    sidebarOpen, setSidebarOpen,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}