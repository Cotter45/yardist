import Carousel from "../carousel";

import beforeNAfter from "./before&After.jpeg";
import patioBefore from "./patio_before.jpeg";
import patio from "./patio.jpeg";
import commercial from "./commercial.jpeg";
import mulch from "./mulch.jpeg";

const data = [
  {
    id: 1,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Leaf Removal",
    src: beforeNAfter,
  },
  {
    id: 2,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Brush Removal",
    src: patioBefore,
  },
  {
    id: 3,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Yard Clean Up",
    src: patio,
  },
  {
    id: 4,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Landscaping",
    src: commercial,
  },
  {
    id: 5,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Mulching",
    src: mulch,
  },
];

export default function Recent() {
  return (
    <section
      id="recent-work"
      className="relative top-0 left-0 w-full h-[65vh] flex flex-col justify-evenly z-10 bg-slate-100"
    >
      <h3 className="w-full text-4xl font-bold z-10 border-b p-4 pt-10">
        Recent Work
      </h3>
      <Carousel data={data} />
    </section>
  );
}