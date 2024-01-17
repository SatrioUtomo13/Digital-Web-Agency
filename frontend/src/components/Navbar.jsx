import React, { useState, useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)

    const ToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // use effect digunakan untuk mengontrol efek perubahan dari scroll
    useEffect(() => {
    // buat closure
        const handleScroll = () => {
        const position = window.scrollY // var untuk menampung nilai scroll
        setScrollPosition(position) // masukkan kedalam state
        }

        window.addEventListener('scroll', handleScroll, {passive:true}) // panggil event scroll

        return () => {
        window.removeEventListener('scroll', handleScroll) // remove event
        }
    })
    return (
        <nav className={`text-white z-10 text-2xl py-8 px-12 flex justify-between sticky top-0 md:py-6 md:px-10 transition-all duration-100 ${scrollPosition > 20 ? 'bg-secondary' : 'bg-transparent'}`}>

            <ScrollLink className='font-ubuntu flex items-center'>Your Company</ScrollLink>

            <ul className={`text-base font-ubuntu text-gray-200 p-3 w-1/2 flex flex-col space-y-3 fixed bg-primary right-14 top-16 ${isMenuOpen ? '' : 'hidden'} md:flex md:static md:flex-row md:justify-between md:text-lg md:w-2/3 md:items-center md:bg-transparent md:space-y-0 md:pr-0 md:pl-0 `}>
                <li className='pl-2 cursor-pointer w-full hover:text-white  hover:bg-secondary md:hover:bg-transparent'>
                    <ScrollLink>Home</ScrollLink>
                </li>

                <li className='pl-2 cursor-pointer w-full hover:text-white hover:bg-secondary md:hover:bg-transparent'>
                    <ScrollLink>About</ScrollLink>
                </li>

                <li className='pl-2 cursor-pointer w-full hover:text-white hover:bg-secondary md:hover:bg-transparent'>
                    <ScrollLink>Services</ScrollLink>
                </li>

                <li className='pl-2 cursor-pointer w-full hover:text-white hover:bg-secondary md:hover:bg-transparent'>
                    <ScrollLink>Contacts</ScrollLink>
                </li>

                <li className=' cursor-pointer w-full hover:text-white rounded-md bg-gradient-to-r from-[#20D9A1] to-[#5F39FF] p-px md:rounded-xl lg:rounded-full'>
                    <div className='flex h-full w-full items-center justify-center bg-primary rounded-md md:bg-black md:py-1 md:rounded-xl lg:py-3 lg:rounded-full'>
                        <ScrollLink>Contact Us</ScrollLink>
                    </div>
                </li>
            </ul>

            <button className='md:hidden' onClick={ToggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-w-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </nav>
    )
}

export default Navbar
