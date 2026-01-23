import { Moon, Sun } from "lucide-react"
import { useAppProps } from "../hooks/useAppProps"
import { cn } from "../utils/cn"

const ThemeToggle = ({iconClass}) => {
  const {theme, setTheme} = useAppProps()
  return (
      <div className='cursor-pointer group relative text-inherit'  onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} >
        <Moon className={cn("dark:hidden", iconClass)}/>
        <Sun className={cn('hidden dark:block', iconClass)} />
        <span className={cn("tooltip", iconClass && "hidden")}>{theme === 'dark' ? 'toggle light mode' : 'toggle dark mode'}</span>
      </div> 
  )
}

export default ThemeToggle