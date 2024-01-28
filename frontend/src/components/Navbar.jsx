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
      className={`fixed left-0 right-0 top-0 z-30 flex justify-between px-5 py-3 text-2xl text-white transition-all duration-100 md:px-14 md:py-5 lg:py-3 lg:px-20 ${scrollPosition > 20 ? "bg-black" : "bg-transparent"}`}
    >
      <ScrollLink className="flex items-center font-ubuntu">
        Your Company
      </ScrollLink>

      <ul
        className={`fixed right-14 top-16 flex w-1/2 flex-col space-y-3 bg-primary p-3 font-ubuntu text-base text-gray-200 ${isMenuOpen ? "" : "hidden"} lg:static lg:flex lg:w-2/3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:bg-transparent lg:pl-0 lg:pr-0 lg:text-lg `}
      >
        <li className="w-full cursor-pointer pl-2 hover:bg-secondary  hover:text-white md:hover:bg-transparent">
          <ScrollLink
            activeClass="active"
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Home</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink
            activeClass="active"
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >About</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink
            activeClass="active"
            to='service'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Services</ScrollLink>
        </li>

        <li className="w-full cursor-pointer pl-2 hover:bg-secondary hover:text-white md:hover:bg-transparent">
          <ScrollLink
            activeClass="active"
            to='contacts'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Contacts</ScrollLink>
        </li>

        <li className="w-full cursor-pointer rounded-md bg-gradient-to-r from-[#20D9A1] to-[#5F39FF] p-px hover:text-white md:rounded-xl lg:rounded-full">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-primary md:rounded-xl md:bg-black md:py-1 lg:rounded-full lg:py-3">
            <ScrollLink>Contact Us</ScrollLink>
          </div>
        </li>
      </ul>

      <button className="lg:hidden" onClick={ToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-9 w-9 md:w-12 md:h-12"
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
