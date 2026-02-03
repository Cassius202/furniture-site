import { products } from "../assets/assets";
import { motion } from "motion/react";
import { cn } from "../utils/cn";
import { ShoppingCartIcon } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Rounder } from "../minor-components/Rounder";
import { FiArrowRight } from "react-icons/fi";

const conditionStyles = {
  new: "bg-emerald-500",
  popular: "bg-indigo-500",
  bestseller: "bg-purple-600",
  trending: "bg-cyan-500",
  limited: "bg-amber-600",
  "low-stock": "bg-red-500",
};

const Store = () => {
  // let sm = useMediaQuery('(max-width:700px)')
  return (
    <section id="products" className="section min-h-screen pt-20">
      <h1 className="title">
        Our <span className="highlight">Collection</span>
      </h1>
      <p className="subtitle">
        Discover our carefully curated selection of premium furniture pieces
        designed to transform your living spaces.
      </p>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-15 max-sm:px-2 px-8 md:px-18">
        {products.map((product) => {
          let starNum = product.rating.star;
          let starExtra = Rounder(starNum, 0.5) - Math.floor(starNum);
          let condtionColor = conditionStyles[product.condition];
          return (
            <div
              key={product.id}
              className="flex flex-col h-120 p-2 transition-colors duration-400  dark-shadow bg-gray-50 dark:bg-gray-900 dark:rounded-lg hover:dark:bg-gray-800 hover:dark hover:light-shadow rounded max-sm:rounded-xl relative"
            >
              <div className="h-7/12 rounded overflow-hidden">
                <img src={product.image} />
              </div>
              <span
                className={cn(
                  `z-10 absolute top-3 rounded left-3 p-1.5 text-xs text-slate-50`,
                  condtionColor
                )}
              >
                {product.condition}
              </span>
              <span className="z-10 absolute rounded text-xs text-red-700 bg-red-100 p-1 top-6/12 left-3 ml-0.5 translate-y-2.5">
                -{product.discount}%
              </span>
              {/* second part */}
              <div className="px-1 mt-3 dark:text-slate-300 flex items-center text-sm gap-1">
                {starNum}
                <div className="flex">
                  {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(
                    (value, index) => {
                      if (Number(starNum) >= value && index % 2 === 1) {
                        return (
                          <FaStar
                            key={index}
                            size={18}
                            className="text-amber-500"
                          />
                        );
                      }
                    }
                  )}
                  {starExtra === 0.5 ? (
                    <FaStarHalfAlt size={18} className="text-amber-500" />
                  ) : starExtra === 1 ? (
                    <FaStar size={18} className="text-amber-500" />
                  ) : null}
                </div>
                <span className="text-slate-600 dark:text-slate-400 ml-2">
                  ({product.rating.number} verified reviews)
                </span>
              </div>
              <div className="px-1 text-slate-700 dark:text-slate-200 mt-1 mb-1 overflow-x-hidden">
                <p className="truncate">
                  {product.name}
                </p>
              </div>
              <h2 className="px-1 text-2xl font-bold dark:text-white">
                ${product.price}
              </h2>
              <div className="flex justify-between mr-2 items-center">
                <div className={cn("gap-4 mt-2 h-max items-center px-1", product.colors.length === 0 && "invisible pointer-events-none")}>
                  <p className="text-sm dark:text-slate-400">Available colors</p>

                  <div className="flex gap-2 mt-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: color,
                        }}
                        className="size-5 rounded-full dark:border dark:border-slate-100 transition-transform hover:scale-110"
                      ></div>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 px-2 text-sm shadow cursor-pointer items-center text-white bg-primary rounded-full relative group flex gap-1">
                  <ShoppingCartIcon size={17} />
                  <span className="">
                    Order now
                  </span>
                </motion.button>
              </div>
              <div className="px-1 text-xs flex justify-between mt-auto">
                <div className="text-xs">
                  {product.freeShipping && (
                    <span className="bg-green-600 rounded-lg p-0.5 px-2 text-slate-50">
                      Free delivery
                    </span>
                  )}
                </div>
                <div className="flex items-center text-slate-50">
                  <span className="bg-primary dark:bg-slate-400 p-0.75 rounded-full mr-1"></span>
                  <span className="text-slate-500 dark:text-slate-300">
                    30-day return
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary w-max self-center mt-12 mb-5 rounded-full px-4 py-2 text-white">
        View all Products <FiArrowRight className="inline ml-2" />
      </motion.button>
    </section>
  );
};

export default Store;
