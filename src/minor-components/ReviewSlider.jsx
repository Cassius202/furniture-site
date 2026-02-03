import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { reviews } from "../assets/assets";
import { cn } from "../utils/cn";
import { useState } from "react";
import StarRender from "./StarRender";

const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }
  };

  return (
    <div className='my-15 flex flex-col items-center w-full px-4'>
      <div className="relative w-full max-w-3xl bg-zinc-50 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-2xl h-[450px] md:h-72">
        
        {/* Navigation Buttons */}
        <button 
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-900 dark:bg-blue-400 text-white dark:text-slate-900 size-11 rounded-full grid place-content-center shadow-lg hover:scale-110 active:scale-95 transition-all"
          onClick={() => handleSlider('left')}
        >
          <ArrowBigLeft fill="currentColor" />
        </button>

        <button 
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-blue-900 dark:bg-blue-400 text-white dark:text-slate-900 size-11 rounded-full grid place-content-center shadow-lg hover:scale-110 active:scale-95 transition-all"
          onClick={() => handleSlider('right')}
        >
          <ArrowBigRight fill="currentColor" />
        </button>

        {/* Slider Window */}
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <div 
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "shrink-0 w-full h-full flex flex-col md:flex-row items-center gap-6 px-10 md:px-16 py-8",
                  index % 2 === 0 ? 'bg-amber-50/40 dark:bg-slate-800' : 'bg-blue-50/40 dark:bg-blue-950/20'
                )}
              >
                {/* Image Container - shrink-0 ensures it stays size-24 */}
                <div className="size-24 md:size-32 rounded-full overflow-hidden shrink-0 border-4 border-white dark:border-slate-700 shadow-sm">
                  <img src={item.image} alt={item.client} className="w-full h-full object-cover" />
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-left overflow-hidden">
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-snug italic line-clamp-4 md:line-clamp-3 mb-4">
                    "{item.text}"
                  </p>
                  
                  <div className="flex flex-col items-center md:items-start">
                    <StarRender rating={item.rating} />
                    <h4 className="font-bold text-slate-900 dark:text-white mt-1">{item.client}</h4>
                    <span className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider">{item.job}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 justify-center mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              activeIndex === index 
                ? "w-8 bg-blue-600 dark:bg-blue-400" 
                : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;