"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import EarthBoxImage from "@/assets/dashboard/images/earth-boxes-cardboard.png";
import CardSliderItem from "./card-slider-item";
import { CardSliderItems } from "@/types/global";

const cardContent: CardSliderItems[] = [
  {
    image: EarthBoxImage,
    title: "KEEP UP with your business needs",
  },
  {
    image: EarthBoxImage,
    title: "STAY AHEAD of your competition",
  },
  {
    image: EarthBoxImage,
    title: "SCALE your operations with ease",
  },
];

export default function DashCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate((currentIndex + 1) % cardContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  return (
    <div>
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <CardSliderItem
              image={cardContent[currentIndex].image}
              title={cardContent[currentIndex].title}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-x-2 sm:gap-x-3 mt-2.5 mb-30p">
        {cardContent.map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-32385E" : "bg-d4d4d4"
            }`}
          />
        ))}
      </div>
    </div>
  );
}