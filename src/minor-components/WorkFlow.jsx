import { workflowSteps } from "../assets/assets"

export const WorkFlow = () => {
  return (
    // Changed max-md:px-14 to responsive px-6. Added max-w-7xl to prevent stretching on ultrawide.
    <div className="mt-10 lg:mt-20 px-6 md:px-14 lg:px-24 max-w-7xl flex flex-col mx-auto">
      
      {/* Responsive Title: Larger on desktop, centered on mobile */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-10 text-center text-left tracking-tight">
        WorkFlow
      </h2>

      {/* Grid Logic:
         - 1 column on tiny phones
         - 2 columns on tablets/small laptops
         - 4 columns on desktop
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {workflowSteps.map((item, index) => (
          <div 
            key={index}
            className="group relative flex flex-col items-center p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full text-center"
          >
            {/* Step Number with Glow Effect */}
            <div className="size-14 rounded-2xl grid place-content-center bg-amber-100 text-amber-600 dark:text-amber-400 dark:bg-amber-900/20 text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>

            <h3 className="text-xl dark:text-slate-50 font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description: Balanced line height for readability */}
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* The Bottom Indicator - Width expands on hover */}
            <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full absolute bottom-4 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}