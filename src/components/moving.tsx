import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "ITBOX Basic Cyber Security Course",
    name: "July 2024 - Present",
  },
  {
    title: "Website Development Mini Bootcamp by GDSC",
    name: "February 2024",
  },
  {
    title: "Dicoding Basic Dev-Ops",
    name: "November 2023",
  },
  {
    title: "Basic Cyber Security and ISO 27001 Awareness by TAALENTA",
    name: "November 2022",
  },
];
