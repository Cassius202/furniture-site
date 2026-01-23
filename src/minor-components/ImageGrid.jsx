import { assets } from "../assets/assets";

const ImageGrid = () => {
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="grid grid-cols-1 wrap md:grid-cols-2 lg:grid-cols-3 grid-rows-[350px_350px_350px_350px] md:grid-rows-[280px_280px_300px] gap-4 max-md:gap-6 px-10">
        
        {/* Item 1 */}
        <div className="rounded-lg overflow-hidden md:row-span-2 relative group">
          <div className="z-10 absolute text-slate-50 h-0 opacity-0 transition-all duration-300 group-hover:h-44 group-hover:opacity-100 bottom-0 w-full px-4 flex flex-col-reverse bg-linear-to-t from-black/80 to-transparent">
            <h3 className="font-medium pb-4 flex flex-col">
              Furnished Bedroom <span className="font-light text-sm text-blue-100">Vienna, Italy</span>
            </h3>
          </div>
          <img src={assets.interiorImg1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="interior image" />
        </div>

        {/* Item 2 */}
        <div className="rounded-lg overflow-hidden relative group">
          <div className="z-10 absolute text-slate-50 h-0 opacity-0 transition-all duration-300 group-hover:h-44 group-hover:opacity-100 bottom-0 w-full px-4 flex flex-col-reverse bg-linear-to-t from-black/80 to-transparent">
            <h3 className="font-medium pb-4 flex flex-col">
              Modern Kitchen <span className="font-light text-sm text-blue-100">Milan, Italy</span>
            </h3>
          </div>
          <img src={assets.interiorImg2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="interior image" />
        </div>

        {/* Item 3 */}
        <div className="rounded-lg overflow-hidden relative group">
          <div className="z-10 absolute text-slate-50 h-0 opacity-0 transition-all duration-300 group-hover:h-44 group-hover:opacity-100 bottom-0 w-full px-4 flex flex-col-reverse bg-linear-to-t from-black/80 to-transparent">
            <h3 className="font-medium pb-4 flex flex-col">
              Living Area <span className="font-light text-sm text-blue-100">Rome, Italy</span>
            </h3>
          </div>
          <img src={assets.interiorImg3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="interior image" />
        </div>

        {/* Item 4 */}
        <div className="rounded-lg overflow-hidden relative group md:col-span-2">
          <div className="z-10 absolute text-slate-50 h-0 opacity-0 transition-all duration-300 group-hover:h-44 group-hover:opacity-100 bottom-0 w-full px-4 flex flex-col-reverse bg-linear-to-t from-black/80 to-transparent">
            <h3 className="font-medium pb-4 flex flex-col">
              Luxury Suite <span className="font-light text-sm text-blue-100">Venice, Italy</span>
            </h3>
          </div>
          <img src={assets.interiorImg4} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="interior image" />
        </div>

      </div>
    </div>
  );
};

export default ImageGrid;