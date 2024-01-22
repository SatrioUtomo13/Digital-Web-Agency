import React from 'react'
import img1 from '../../assets/homeAssets/hero-1.png'
import img2 from '../../assets/homeAssets/hero-2.png'
import home1 from '../../assets/homeAssets/home1.svg'
import home2 from '../../assets/homeAssets/home2.svg'
import scrollBg from '../../assets/homeAssets/scroll-bg.png'
import mouse from '../../assets/homeAssets/mouse-scroll.png'

function Home() {
  return (
    <div className='w-full h-fit px-5 relative flex flex-col pt-40 pb-28 box-border bg-gradient-to-br from-black via-[#111111] to-[#242424] md:px-14 lg:flex-row lg:px-20 lg:pt-52'>
      <div className='text-white mb-20 flex flex-col space-y-4 md:space-y-7'>
        <span className='font-bilbo text-4xl md:tracking-wider'>Creative Thingking</span>
        <h1 className='font-ubuntu text-4xl font-bold leading-10 md:text-5xl lg:text-6xl'>Strategic Thingking, Tengible <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradPrimary to-gradSecondary'>Result for Business!</span></h1>
        <p className='text-lg text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus temporibus dolores reprehenderit quam pariatur eius quidem nulla nemo.</p>
        <button className='w-fit py-3 px-9 border-none font-semibold font-ubuntu bg-gradient-to-r from-gradSecondary to-gradPrimary rounded-full'>Explore Now</button>
      </div>

      <div className='w-full max-w-80 self-center relative z-10 md:max-w-sm lg:max-w-md'>
        <div className='max-w-60 ml-auto md:max-w-72'>
          <img src={img1} className='max-w-full'/>
        </div>
        <div className='absolute max-w-48 z-10 left-0 top-[20%] md:max-w-52 md:top-[28%] lg:max-w-60 lg:top-[20%]'>
          <img src={img2} className='max-w-full rounded-full shadow-[-20px_-17px_1px_-6px_rgba(255,255,255,0.1)]'/>
        </div>
      </div>

      <img src={home1} className='absolute bottom-0 left-0 w-1/2'/>
      <img src={home2} className='absolute top-0 right-0'/>
      <img src={scrollBg} className='max-w-[90px] absolute -bottom-[32px] right-1/2 translate-x-1/2'/>
      <img src={mouse} className='max-w-[90px] absolute -bottom-[12px] right-1/2 translate-x-1/2'/>
    </div>
  )
}

export default Home
