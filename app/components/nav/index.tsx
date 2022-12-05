import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import icon from "./icon.png";

export default function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const prevScrollRef = useRef(0);
  const screenHeight = useRef(0);
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

    screenHeight.current = window.innerHeight;

    const handleScroll = () => {
      const currentScroll = window && window.pageYOffset;
      const prevScroll = prevScrollRef.current;

      if (currentScroll < screenHeight.current) {
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
      <nav ref={navRef} className="bg-neutral-100 w-full h-[70px] fixed top-0 transition-all ease-in-out duration-300 flex items-end justify-center z-40">
        <header className="relative flex items-end justify-between w-full max-w-[1200px] px-4">
          <div className="flex items-center">
            <img
              src={icon}
              alt="Logo"
              className="h-[60px] aspect-video mb-1"
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
        </header>
        <div className={`${isOpen ? '-right-[5%]' : 'right-full'} absolute -bottom-[50px] bg-yellow-900 h-[40px] w-[110%] transition-all ease-in-out duration-1000 flex justify-evenly items-center rounded`}>
          <button 
            onClick={() => {
              window && window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="text-white"
          >
            Home
          </button>
          <button
            onClick={() => {
              window && window.scrollTo({
                top: window.innerHeight + 120,
                behavior: 'smooth'
              });
            }}
            className="text-white"
          >
            About
          </button>
          <button
            onClick={() => {
              window && window.scrollTo({
                top: (window.innerHeight * 2) + 120,
                behavior: 'smooth'
              });
            }}
            className="text-white"
          >
            Contact
          </button>
        </div>
      </nav>
    </>
  );
}