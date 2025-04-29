import { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
  icon: StaticImageData;
}

export interface CaredSliderItemParams {
  title: string;
  image: StaticImageData;
  key?: number,
}

export interface CardSliderItems {
    title: string;
    image: StaticImageData;
}

export interface OverViewCardParams {
  iconBgColor: string;
  icon: StaticImageData;
  title: string;
}