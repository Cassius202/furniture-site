import { Bluetooth } from "lucide-react"
import { workflowSteps } from "../assets/assets"

export const WorkFlow = () => {
  return (
    <div className="mt-5 lg:mt-0 section max-md:px-14">
      <div className="title text-3xl text-slate-900 dark:text-slate-100 mb-10">
        WorkFlow
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-2 ">
        {workflowSteps.map((item, index) => {
          return <div className="border dark:border-slate-600 flex flex-col items-center py-4 pb-6 bg-zinc-50 border-slate-300 rounded group relative  hover:shadow-lg dark:bg-slate-800 h-full cursor-pointer" key={index}>
            <div className="size-14 rounded-lg grid place-content-center bg-amber-200 text-primary dark:text-amber-500  dark:bg-amber-900/30 text-3xl my-2">
              {index + 1}
            </div>
            <h3 className="text-lg dark:text-slate-50 font-medium mt-2">
              {item.title}
            </h3>
            <p className="subtitle text-sm my-1">
              {item.description}
            </p>
            <div className={`w-15 h-1 bg-gray-500 rounded absolute bottom-2 group-hover:bg-orange-500 transition-colors`}>

            </div>
          </div>
        })}
      </div>
    </div>
  )
}
