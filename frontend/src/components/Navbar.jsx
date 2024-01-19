import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // use effect digunakan untuk mengontrol efek perubahan dari scroll
  useEffect(() => {
    // buat closure
    const handleScroll = () => {
      const position = window.scrollY; // var untuk menampung nilai scroll
      setScrollPosition(position); // masukkan kedalam state
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // panggil event scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // remove event
    };
  });
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-10 flex justify-between px-5 py-3 text-2xl text-white transition-all duration-100 md:px-10 md:py-2 lg:py-0 ${scrollPosition > 20 ? "bg-black" : "bg-transparent"}`}
    >
      <ScrollLink className="flex items-center font-ubuntu">
        Your Company
      </ScrollLink>

      <ul
        className={`fixed right-14 top-16 flex w-1/2 flex-col space-y-3 bg-primary p-3 font-ubuntu text-base text-gray-200 ${isMenuOpen ? "" : "hidden"} md:static md:flex md:w-2/3 md:flex-row md:items-center md:justify-between md:space-y-0 md:bg-transparent md:pl-0 md:pr-0 md:text-lg `}
      >
        <li className="w-full cursor-pointer pl-2 hover:bg-secondary  hover:text-white md:hover:bg-transparent">
          <ScrollLink>Home</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink>About</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink>Services</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink>Contacts</ScrollLink>
        </li>

        <li className="w-full cursor-pointer rounded-md bg-gradient-to-r from-[#20D9A1] to-[#5F39FF] p-px hover:text-white md:rounded-xl lg:rounded-full">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-primary md:rounded-xl md:bg-black md:py-1 lg:rounded-full lg:py-3">
            <ScrollLink>Contact Us</ScrollLink>
          </div>
        </li>
      </ul>

      <button className="md:hidden" onClick={ToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-w-9 w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
