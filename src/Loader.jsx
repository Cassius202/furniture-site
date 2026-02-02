import { useState, useEffect } from "react"
import {motion, AnimatePresence} from 'motion/react'

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout( () => setLoading(false), 1500)
    };

     if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }
      const timeout = setTimeout(handlePageLoad, 4000);
      return () => {window.removeEventListener('load', handlePageLoad);
        clearTimeout(timeout);
      }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? <LoaderFrame /> : <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.6}}
      >
      {children}
      </motion.div> } 
    </AnimatePresence>
  )
}

const LoaderFrame = () => {
  return <motion.div 
  initial={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{duration: 0.4}}
  className="h-screen w-screen flex items-center justify-center bg-linear-to-br from-stone-950 to-stone-900"
  > 
    <div className="text-amber-500 text-7xl font-bold">
      Rose Home
    </div>
  </motion.div>
}

export default Loader