import { ArrowBigLeft, ArrowBigRight, ChevronLeft } from "lucide-react"
import { reviews } from "../assets/assets"
import { cn } from "../utils/cn"
import { useState, useRef, useEffect } from "react";
import StarRender from "./StarRender";

const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const handleSlider = (direction) => {
    switch(direction) {
      case 'left':
      setActiveIndex(prev => (prev - 1) % reviews.length)
      console.log(activeIndex)
      break;

      case 'right':
      setActiveIndex(prev => (prev + 1) % reviews.length);
      console.log(activeIndex)
      break;
    }
  } 
  useEffect(() => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;

    sliderRef.current.scrollLeft = (width * activeIndex);

  }, [activeIndex] )

  return (
    <div className='my-15 min-h-60 max-w-2xl max-md:max-w-lg px-8 md:px-14 lg:px-24 w-full'>

      <div className="card rounded border-2 border-slate-300 bg-zinc-50 h-80 w-full dark:bg-slate-800 relative">
        <button className="bg-blue-900 dark:bg-blue-300  rounded-full text-white dark:text-slate-900 size-10 grid place-content-center absolute top-1/2 -translate-x-1/2  -translate-y-1/2 hover:opacity-80 transition-transform hover:scale-[1.03]"
        onClick={() => handleSlider('left')}
        >
          <ArrowBigLeft />
        </button>
        <button className="bg-blue-900 dark:bg-blue-300 rounded-full text-white dark:text-slate-900 size-10 grid place-content-center absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hover:opacity-80 transition-transform hover:scale-[1.03]"
        onClick={() => handleSlider('right')}
        >
          <ArrowBigRight />
        </button>
        <div ref={sliderRef} className="slider-container flex h-full w-full overflow-x-hidden">
          {
           reviews.map((item, index) => 
            <div key={index} className={cn("shrink-0 w-full items-center py-3 flex flex-col px-6 bg-blue-100 dark:bg-blue-950/80 overflow-hidden", index % 2 === 0 && 'bg-amber-50' )}>
              <div className="size-16 rounded-full mt-2 overflow-hidden shrink-0">
                <img src={item.image} />
              </div>
             <div className="text-slate-800 w-full flex-1 grid gap-2 grid-rows-[63%_36%]">
              <p className="subtitle line-clamp-4 text-ellipsis leading-[1.4em] max-h-[5.8em] text-base text-slate-900 place-content-center dark:text-slate-50">
                 "{item.text}"
              </p>
              <div className="flex flex-col items-center">
                <StarRender rating={item.rating} />
                <p className="font-semibold dark:text-blue-100 mt-1">{item.client}</p>
                <span className="text-sm text-slate-600 dark:text-slate-400">{item.job}</span>
              </div>
             </div>
            </div>
          ) 
          }
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-4">
        {
          reviews.map((item, index) => 
            <span 
            onClick={() => setActiveIndex(index)}
            key={index} className={cn('size-5.5 rounded-full bg-slate-300 cursor-pointer dark:bg-gray-600 transition-transform hover:scale-[1.1]', activeIndex === index && "bg-primary")}>
            
              {" "}
            </span>
          )
        }
      </div>
    </div>
  )
}

export default ReviewSlider