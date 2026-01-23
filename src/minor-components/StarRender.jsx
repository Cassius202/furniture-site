import { FaStar } from "react-icons/fa6";
import { Rounder } from "./Rounder";
import { FaStarHalfAlt } from "react-icons/fa";

//npm i react-icons --save

const StarRender = ({rating}) => {
  const starNum = Number(rating);
  const starExtra = Rounder(starNum , 0.5) - Math.floor(starNum)
  return (
    <div className="flex gap-1">
    {
    [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(
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
    )
  }
  {
    starExtra === 0.5 ? (
      <FaStarHalfAlt size={18} className="text-amber-500" />
    ) : starExtra === 1 ? (
      <FaStar size={18} className="text-amber-500" />
    ) : null
  }
  </div>
  )
}

export default StarRender