import React from 'react'
import img1 from '../../assets/aboutAssets/img1.png'
import img2 from '../../assets/aboutAssets/img2.png'
import img3 from '../../assets/aboutAssets/img3.png'
import img4 from '../../assets/aboutAssets/img4.png'

function About() {
  return (
    <>
      <div className='mt-8 flex flex-col space-y-5 md:px-14 lg:flex-row lg:space-y-0 lg:mt-10' id='about'>

        <div className="max-w-md mx-auto grid grid-cols-3 gap-2 px-5 overflow-x-hidden md:mt-10 md:max-w-2xl lg:max-w-none">
          <div className="w-40 col-span-1 self-start box-border rounded-full p-3 border border-gradSecondary md:w-52">
            <img src={img2}/>
          </div>
          <div className="w-60 p-3 my-32 col-span-1 row-span-2 self-center box-border rounded-full border border-gradPrimary md:w-80">
            <img src={img1}/>
          </div>
          <div className="w-28 col-span-1 self-end row-span-2 box-border rounded-full p-3 border border-gradSecondary md:w-32">
            <img src={img4}/>
          </div>
          <div className="w-36 col-span-1 self-center box-border rounded-full p-3 border border-gradPrimary md:w-40">
            <img src={img3}/>
          </div>
        </div>

        <div className='flex flex-col px-5 space-y-5 font-ubuntu justify-center'>
          <span className='font-bilbo text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gradSecondary to-gradPrimary md:tracking-[3.5px] lg:text-4xl'>About Us</span>
          <h2 className='text-4xl font-bold text-primary md:text-[40px]'>Making Your Business More Unique</h2>
          <div className='flex flex-col space-y-3 text-[#727272] md:text-lg'>
            <p>As a leading software house, we provide solutions world-class software with technological and design excellence.
            </p>

            <p>Supported by a team commitment, we meet clients' needs with high performance, noise, and full of innovation
            </p>
          </div>
          <div className='w-full h-fit'>
            <div className='w-1/2 cursor-pointer rounded-full bg-gradient-to-r from-[#20D9A1] to-[#5F39FF] p-px hover:text-white md:w-1/4 lg:rounded-full'>
              <a href='' className='text-gradPrimary rounded-full py-5 flex h-full w-full items-center justify-center bg-white  lg:rounded-full lg:py-3'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
