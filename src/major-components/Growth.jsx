import { Globe, Globe2, Star } from "lucide-react"
import { achievements, stats } from "../assets/assets"
import { FaPlus } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"

const Growth = () => {
  return (
    <section className="min-h-screen w-full overflow-x-hidden section max-md:px-12">
      <h1 className="title">
        Our <span className="highlight">Growth</span>
      </h1>
      <p className="subtitle">
        From humble beginnings to global recognition, our journey reflects our commitment to delivering exceptional furniture that transforms homes worldwide.
      </p>

      <div className="grid max-md:flex flex-col items-center w-full max-md:px-10 sm:gap-y-6 gap-4 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center flex-wrap xl:grid-cols-4 mt-8">
        {achievements.map((entry, index) => <div key={index} className='max-md:max-w-md w-full bg-slate-100 dark:bg-slate-800 h-80 rounded-lg flex flex-col items-center py-4 justify-center transition-[border] hover:border lg:w-64 dark:border-slate-500 border-slate-300'>
          <div className='p-4 bg-amber-100 w-max rounded-full mb-5 dark:text-primary'>
            <entry.icon size={40} />
          </div>
          <div className="flex font-bold dark:text-white text-3xl gap-1 items-center">
            {entry.data} <span className="highlight"><FaPlus className="text-2xl" /></span>
          </div>
          <div className="text-lg mt-3 dark:text-slate-50 mb-2 text-slate-950">
            {entry.title}
          </div >
          <p className="text-slate-600  text-center mx-5 dark:text-gray-300">
            {entry.text}
          </p>
        </div>)}
      </div>
      <div className="bg-pink-100 dark:bg-orange-950/20 self-center mt-12 pt-6 rounded-lg lg:grid grid-cols-[40%_58%] gap-2">
        <div className="lg:flex flex-col justify-center">
          <h2 className="title mb-4 text-4xl  max-sm:text-3xl px-4 text-slate-900 dark:text-slate-100">
            Building Trust Through Quality
          </h2>
          <p className="text-sm font-slate-700 dark:font-slate-300 dark:text-slate-300 text-center px-8 md:px-22 lg:px-8">
            Our growth isn't just about numbers—it's about the relationships we've built and the homes we've helped create. Every piece tells a story of craftsmanship, durability, and timeless design.
          </p>
          <div className="text-slate-900 dark:text-slate-50 text-sm flex gap-4 mt-4 justify-center">
            <span className='flex text-amber-500 text-xl'>
              {[1, 2, 3, 4, 5].map((index) => <FaStar key={index} />)}
            </span>
            4.9/5 Customer Rating
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-15 mb-6 px-5 ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="h-30 flex flex-col justify-center rounded-xl border border-slate-300 dark:bg-slate-800 dark:border-slate-500 bg-white transition cursor-pointer hover:scale-[1.02]"
            >
              <div className="title text-3xl text-primary">
                {stat.value}
              </div>
              <p className="subtitle">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Growth