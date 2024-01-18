import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';

function Footer() {
  return (
    <div className="w-full lg:h-[504px] relative z-10 font-ubuntu bg-footer text-white">
      <div className="px-4 md:px-10 lg:px-12 xl:px-28 py-16 lg:flex lg:gap-20">
        <div className="lg:w-1/3">
          <h1 className="font-bold text-[30px]">Your Company</h1>
          <p className="mt-10 text-base">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaInstagram className="text-xl text-footer" />
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaXTwitter className="text-xl text-footer" />
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaWhatsapp className="text-xl text-footer" />
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaFacebookF className="text-xl text-footer" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="font-bold text-[22px]">Departments</h2>
          <nav className="mt-10 flex flex-col gap-4 text-base">
            <a href="#" className="hover:opacity-75">
              Web Development
            </a>
            <a href="#" className="hover:opacity-75">
              Mobile Development
            </a>
            <a href="#" className="hover:opacity-75">
              Desktop Development
            </a>
            <a href="#" className="hover:opacity-75">
              Internet of Things
            </a>
          </nav>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="font-bold text-[22px]">Company</h2>
          <nav className="mt-10 flex flex-col gap-4 text-base">
            <a href="#" className="hover:opacity-75">
              About Us
            </a>
            <a href="#" className="hover:opacity-75">
              Services
            </a>
            <a href="#" className="hover:opacity-75">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="font-bold text-[22px]">Contact Us</h2>
          <nav className="mt-10 flex flex-col gap-4 text-base">
            <a href="#" className="flex items-center gap-3 hover:opacity-75">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex justify-center items-center">
                <IoMdMail className="text-xl text-white" />
              </div>
              info@gmail.com
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-75">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex justify-center items-center">
                <FaGlobe className="text-xl text-white" />
              </div>
              www.website.com
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-75">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex justify-center items-center">
                <IoLocationSharp className="text-xl text-white" />
              </div>
              225 Marion Street, Columbia
            </a>
            <a href="#" className="flex items-center gap-3 hover:opacity-75">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex justify-center items-center">
                <FaPhoneVolume className="text-xl text-white" />
              </div>
              + 00 123 456 789
            </a>
          </nav>
        </div>
      </div>
      <div className="lg:mt-6 xl:mt-8 py-6 lg:py-4 px-10 lg:px-16 flex flex-col md:flex-row md:justify-between items-center">
        <p>Copyright &copy; 2023. All Right Reserved.</p>
        <nav className="mt-4 md:mt-0 flex items-center gap-4 md:gap-8">
          <a href="#" className="hover:opacity-75">
            Setting & Privacy
          </a>
          <a href="#" className="hover:opacity-75">
            FAQ
          </a>
          <a href="#" className="hover:opacity-75">
            Support
          </a>
        </nav>
      </div>
      <img
        src="/src/assets/footerAssets/footer1.svg"
        alt="footer1"
        className="absolute bottom-0 left-0 -z-10"
      />
      <img
        src="/src/assets/footerAssets/footer2.svg"
        alt="footer2"
        className="absolute top-0 left-0 -z-10"
      />
      <img
        src="/src/assets/footerAssets/footer3.svg"
        alt="footer3"
        className="absolute top-[15rem] lg:top-0 right-0 -z-10"
      />
      <img
        src="/src/assets/footerAssets/footer4.svg"
        alt="footer4"
        className="absolute top-[22rem] lg:top-36 right-40 -z-10"
      />
    </div>
  );
}

export default Footer;
