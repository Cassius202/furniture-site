import { useState, useEffect } from "react"
import { motion, AnimatePresence } from 'motion/react'

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      // Small buffer to ensure everything feels settled
      setTimeout(() => setLoading(false), 3500)
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    const timeout = setTimeout(handlePageLoad, 4000); // Safety fallback

    return () => {
      window.removeEventListener('load', handlePageLoad);
      clearTimeout(timeout);
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        /* Key is essential here for AnimatePresence to track the exit */
        <LoaderFrame key="loader-screen" />
      ) : (
        <motion.div
          key="content-screen"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const LoaderFrame = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen flex items-center justify-center bg-stone-950"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-amber-500 text-5xl md:text-7xl font-bold tracking-tighter"
      >
        Rose Home
      </motion.div>
    </motion.div>
  )
}

export default Loader