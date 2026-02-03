import { assets } from "../assets/assets"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section className="w-full min-h-screen text-white z-10 flex flex-col max-sm:flex-col-reverse max-sm:justify-end pt-20">
      <div className="flex w-full px-8 lg:px-24 max-sm:my-10">
        <div className="p-2 mt-5 ml-auto lighten rounded-lg backdrop-blur-lg w-60 max-sm:w-full shadow h-38 max-sm:h-45 lg:w-72 lg-h-44">
          <div className="rounded overflow-hidden h-full w-full">
            <video controls>
              <source src={assets.video} type="video/mp4" />
              video not available
            </video>
          </div>
        </div>
      </div>
      <motion.div 
      initial={{x: 100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.8, ease: "easeOut"}}
      className="px-8 mt-12  md:px-12 lg:px-20 flex flex-col items-center z-20">
        <h4 className="text-lg tracking-wide">
          Exclusive Furniture
        </h4>
        <h1 className="text-7xl max-sm:text-6xl max-[350px]:text-5xl mt-3 lg:text-8xl font-extrabold text-orange-400 ">
          COMFORT
        </h1>
        <p className='text-xl py-2 px-5 sm:px-10 md:px-18 lg:px-26 text-center mt-5 lg:text-2xl text-white' >
          Explore a wide range of high-quality furniture classic styles furniture world.
        </p>
      </motion.div>
    </section>
  )
}

export default Hero