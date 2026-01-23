import { FaGem } from "react-icons/fa6";
import { GiGemini } from "react-icons/gi";

import {
  Bird,
  Star,
  Home,
  ArrowRight,
  MessageSquare,
  Leaf,
} from "lucide-react";
import { serviceList } from "../assets/assets";
import ImageGrid from "../minor-components/ImageGrid";

const services = [
  {
    id: "design",
    title: "Personalized Design",
    description:
      "Tailored solutions that reflect your unique taste and lifestyle preferences.",
    icon: Bird,
  },
  {
    id: "service",
    title: "Complete Service",
    description:
      "End-to-end solutions from planning to final installation and styling.",
    icon: Star,
  },
  {
    id: "quality",
    title: "Premium Quality",
    description:
      "Only the finest materials and furniture pieces for lasting beauty.",
    icon: Home,
  },
  {
    id: "delivery",
    title: "Timely Delivery",
    description: "Professional project management ensuring on-time completion.",
    icon: ArrowRight,
  },
  {
    id: "consultation",
    title: "Expert Consultation",
    description:
      "Professional guidance to help you make informed decisions for your space.",
    icon: MessageSquare,
  },
  {
    id: "sustainable",
    title: "Sustainable Choices",
    description:
      "Eco-friendly materials and ethical sourcing for a conscious home.",
    icon: Leaf,
  },
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen items-center section">
      <div className="text-primary text-sm px-4 py-2 w-max flex  gap-2 items-center rounded-full bg-orange-100  mb-6 dark:text-amber-900">
        <FaGem className="text-amber-400 dark:text-amber-500" /> Design
        Excellence
      </div>
      <h1 className="title">
        Our Interior <span className="highlight">Design</span>
      </h1>
      <h2 className="subtitle">
        From concept to completion, we follow a structured approach to deliver
        exceptional results that exceed your expectations every step of the way.
      </h2>
      <div className="max-w-2xl bg-slate-200 mt-8 rounded-xl py-4 dark:bg-slate-800">
        <h3 className="text-gray-900 dark:text-white text-2xl font-medium px-6">
          Transform Your Space into a{" "}
          <span className="highlight">Dream Home</span>
        </h3>
        <p className="subtitle text-base text-left px-6">
          From concept to completion, we create stunning interiors that
          perfectly blend style, comfort, and functionality. Let our expert
          designers bring your vision to life with personalized solutions
          tailored to your lifestyle.
        </p>
      </div>

      <div className="flex flex-col items-center">
        
      <div className="grid grid-cols-1 max-md:px-10 sm:grid-cols-2 mb-10 lg:grid-cols-3 gap-3 mt-12">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 dark:bg-slate-800 rounded-lg xl:flex xl:w-60 xl:h-42 flex-col h-28 grid grid-cols-[22%_75%] lg:items-center "
          >
            <div className="icon w-full place-items-center pt-4">
              <div className="p-2 w-max bg-orange-100 dark:bg-orange-900/30 rounded-lg justify-center">
                <item.icon className="text-primary" />
              </div>
            </div>
            <div className="text py-2 xl:text-center xl:px-2">
              <h4 className="font-semibold dark:text-white">{item.title}</h4>
              <p className="text-sm text-gray-800 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-md:px-10 w-full flex flex-col items-center mb-10">
        <div className="border rounded-lg border-slate-300 dark:border-slate-600 min-h-30 w-full max-w-2xl flex flex-col justify-center h-full">
          <menu className="grid grid-cols-2 gap-y-2 pl-10 ">
            {serviceList.map((service) => {
              return (
                <li
                  className="dark:text-slate-100 flex items-center gap-2"
                  key={service.id}
                >
                  <div className="size-1.5 bg-primary rounded-lg"></div>
                  {service.title}
                </li>
              );
            })}
          </menu>
        </div>
        <div className="button mt-8 gap-4 flex flex-col items-center w-full">
          <button className="px-2 sm:px-4 py-3 rounded-lg rounded-tl-xs bg-slate-900 dark:bg-white dark:text-slate-900 transition hover:scale-[1.03] text-white w-48 max-sm:text-sm whitespace-nowrap max-sm:w-full">
            Schedule Consultation
          </button>
          <button className=" px-4 py-3 bg-primary rounded-lg rounded-br-xs text-slate-200 transition hover:scale-[1.03] w-48 max-sm:text-sm max-sm:w-full">
            View Portfolio
          </button>
        </div>
      </div>
      </div>
      <ImageGrid />
    </section>
  );
};

export default Work;
