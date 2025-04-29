import Image from "next/image";

import {  OverViewCardParams } from "@/types/global";
import ArrowUpGreenIcon from "@/assets/dashboard/icons/arrow-up-green.svg";
  
  
  export default function OverViewCard({
    title,
    icon,
    iconBgColor
  }: OverViewCardParams) {
    return (
      <div className="h-163p flex flex-col justify-center px-4 w-full rounded-lg bg-white">
      <div className="flex items-center gap-x-2 mb-2">
        <div className={`flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0 ${iconBgColor}`}>
          <Image className="h-6 w-6" src={icon} alt={title} />
        </div>
        <span className="font-normal400 text-xs text-525252">
         {title}
        </span>
      </div>

      <div className="flex items-center gap-x-2 mb-1">
        <p className="font-montserrat-500 text-2xl text-353535">34</p>
        <div className="flex items-center gap-x-0.5">
          <div className="h-3 w-3">
            {" "}
            <Image
              className="h-full w-full"
              src={ArrowUpGreenIcon}
              height={24}
              width={24}
              alt="arrow up icon"
            />{" "}
          </div>
          <span className="text-0a7d00 text-xs font-normal400">90%</span>
        </div>
       
      </div>
      <div>
          <span className="font-montserrat-400 font-xs text-8p text-7b7b7b">
            Vs last month:{" "}
          </span>
          <span className="text-11p font-montserrat-500 text-3a3a3a">4</span>
        </div>
    </div> );
  }
  

