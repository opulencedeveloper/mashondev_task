import Image from "next/image";

import { CaredSliderItemParams } from "@/types/global";
  
  
  export default function CardSliderItem({
    title,
    image
  }: CaredSliderItemParams) {
    return (
        <div className="bg-hero-pattern pl-4 sm:pl-9 pb-455p pt-10 bg-red flex justify-between items-center flex-shrink-0 w-full rounded-607p h-44 sm:h-60">
        <div className="flex flex-col justify-end h-full max-w-517p">
          <h3 className="font-heavy900 text-white uppercase leading-tight text-xl sm:text-2xl lg:text-4xl">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-center sm:flex-shrink-0 sm:h-[248px] w-[298px] ">
          <Image className="h-full w-full" src={image} alt="" />
        </div>
      </div>
    );
  }
  