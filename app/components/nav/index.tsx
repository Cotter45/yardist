import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import icon from "./icon.png";

export default function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const prevScrollRef = useRef(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.querySelector("main");
    const close = () => setIsOpen(false);

    body?.addEventListener("click", close);

    return () => body?.removeEventListener("click", close);
  }, [isOpen]);

  useEffect(() => {
    if (!window) return;

    const handleScroll = () => {
      const currentScroll = window && window.pageYOffset;
      const prevScroll = prevScrollRef.current;

      if (currentScroll < 80) {
        if (navRef && navRef.current) navRef.current.style.top = "0";
        return;
      }

      if (currentScroll > prevScroll) {
        if (navRef && navRef.current) navRef.current.style.top = "-120px";
      } else {
        if (navRef && navRef.current) navRef.current.style.top = "0";
      }

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window && window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} className="w-full h-[70px] fixed top-0 transition-all ease-in-out duration-300 flex items-end justify-center z-10">
        <div className="relative flex items-end justify-between w-full max-w-[1200px] px-4">
          <div className="flex items-center">
            <img
              src={icon}
              alt="Logo"
              className="h-[60px] aspect-video"
            />
          </div>
          <div className="h-full flex items-end">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="#000"
              size={28}
              rounded
              label="Show menu"
            />
          </div>
        </div>
        <div className={`${isOpen ? '-right-[5%]' : 'right-full'} absolute -bottom-[50px] bg-amber-900 h-[40px] w-[110%] transition-all ease-in-out duration-1000 flex justify-evenly items-center rounded`}>
          <a href="#top" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </nav>
    </>
  );
}