import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="relative px-10 md:px-20 lg:px-24 xl:px-36 py-28 font-ubuntu bg-white lg:flex lg:justify-between lg:gap-20 xl:gap-28 z-10">
      <div className="lg:mt-20 lg:w-1/2">
        <h1 className="bg-gradient-to-r from-[#22D6A4] to-[#4284D3] bg-clip-text text-transparent font-bilbo text-[40px]">Get in Touch</h1>
        <p className="font-bold text-[50px] leading-tight">Have any Project Plan in Your Mind ?</p>
        <div className="mt-10">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#22D6A4] to-[#4284D3] rounded-full">
              <FaPhone className="text-white text-xl" />
            </div>
            <div className="flex flex-col text-slate-500">
              <p className="text-base">For Urgent Help</p>
              <p className="text-lg font-semibold">+ 000 123 456 789</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#22D6A4] to-[#4284D3] rounded-full">
              <IoMdMail className="text-white text-2xl" />
            </div>
            <div className="flex flex-col text-slate-500">
              <p className="text-base">Mail us 24/7</p>
              <p className="text-lg font-semibold">hello@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:mt-0 lg:w-1/2">
        <form action="#" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label className="text-xl text-slate-500">Your Name</label>
            <div className="input-gradient">
              <input type="text" id="name" className="w-full outline-none" required />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-xl text-slate-500">Your Email</label>
            <div className="input-gradient">
              <input type="email" id="email" className="w-full outline-none" required />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-xl text-slate-500">How can help you?</label>
            <div className="input-gradient">
              <textarea rows="5" className="w-full outline-none" required />
            </div>
          </div>
          <button type="submit" className="p-5 bg-gradient-to-r from-[#22D6A4] to-[#4284D3] rounded-xl text-white text-xl tracking-wide">Submit Now</button>
        </form>
      </div>
      <img src="/src/assets/contactAssets/contact1.svg" alt="contact-vector1" className="absolute top-52 lg:top-64 left-5 md:left-10 -z-10" />
      <img src="/src/assets/contactAssets/contact1.svg" alt="contact-vector2" className="absolute bottom-64 lg:top-44 right-5 md:right-10 -z-10" />
    </div>
  )
}

export default Contact