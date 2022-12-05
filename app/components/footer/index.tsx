import { useEffect, useRef, useState } from "react";

import grassP from "./grass.webp";
import grass from "./grass.png";
import cutGrass from "./cutGrass.png";
import cutGrassP from "./cutGrass.webp";

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!window) return;

    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window && window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!window) return;

    setScrollY(window.scrollY);
    setTotalScroll(window.pageYOffset + window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
      setTotalScroll(window.pageYOffset + window.innerHeight);
    };

    window && window.addEventListener("scroll", handleScroll);

    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (width) {
    return (
      <div className="w-full flex items-end">
        <h3
          style={{
            opacity: totalScroll ? (scrollY / totalScroll) * 1.5 : 0,
          }}
          className={`text-white whitespace-nowrap absolute bottom-[25px] left-[50%] -translate-x-[50%] text-xs z-10 bg-[rgba(20,83,45,.6)] p-2 rounded`}
        >
          Copyright © 2022 The Yardist Lawn Services - All Rights Reserved.
        </h3>
        <picture>
          <source srcSet={cutGrassP} type="image/webp" />
          <source srcSet={cutGrass} type="image/jpeg" />
          <img
            src={grass}
            alt="Grass"
            className="w-full h-full max-h-[300px] fixed bottom-0 left-0 z-0 object-fill"
          />
        </picture>
        <picture className="max-h-[100px] overflow-hidden">
          <source srcSet={grassP} type="image/webp" />
          <source srcSet={grass} type="image/jpeg" />
          <img
            src={grass}
            alt="Grass"
            style={{
              bottom: totalScroll
                ? `${Math.floor((scrollY / totalScroll) * 100) - 175}px`
                : "-175px",
            }}
            className="w-full h-full max-h-[300px] fixed bottom-0 left-0 z-0 object-fill"
          />
        </picture>
      </div>
    );
  }

  return (
    <div className={` transition-all duration-500 ease-in-out flex`}>
    </div>
  );
}