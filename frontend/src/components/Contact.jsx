import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="relative z-10 bg-white px-10 py-10 font-ubuntu md:px-20 md:py-16 lg:flex lg:justify-between lg:gap-20 lg:px-24 lg:py-28 xl:gap-28 xl:px-36" id="contacts">
      <div className="lg:mt-20 lg:w-1/2">
        <h1 className="bg-gradient-to-r from-[#22D6A4] to-[#4284D3] bg-clip-text font-bilbo text-[40px] text-transparent">
          Get in Touch
        </h1>
        <p className="text-[50px] font-bold leading-tight">
          Have any Project Plan in Your Mind ?
        </p>
        <div className="mt-10">
          <div className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#22D6A4] to-[#4284D3]">
              <FaPhone className="text-xl text-white" />
            </div>
            <div className="flex flex-col text-slate-500">
              <p className="text-base">For Urgent Help</p>
              <p className="text-lg font-semibold">+ 000 123 456 789</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#22D6A4] to-[#4284D3]">
              <IoMdMail className="text-2xl text-white" />
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
              <input
                type="text"
                id="name"
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-xl text-slate-500">Your Email</label>
            <div className="input-gradient">
              <input
                type="email"
                id="email"
                className="w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-xl text-slate-500">How can help you?</label>
            <div className="input-gradient">
              <textarea rows="5" className="w-full outline-none" required />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-[#22D6A4] to-[#4284D3] p-5 text-xl tracking-wide text-white"
          >
            Submit Now
          </button>
        </form>
      </div>
      <img
        src="/src/assets/contactAssets/contact1.svg"
        alt="contact-vector1"
        className="absolute left-5 top-36 -z-10 md:left-10 md:top-40 lg:top-72"
      />
      <img
        src="/src/assets/contactAssets/contact1.svg"
        alt="contact-vector2"
        className="absolute bottom-96 right-5 -z-10 md:bottom-64 md:right-10 lg:top-44"
      />
    </div>
  );
}

export default Contact;
