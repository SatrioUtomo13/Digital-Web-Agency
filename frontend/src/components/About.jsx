// NOTE:nanti di refactor biar lebih reusable component nya
import AboutImage1 from "../assets/aboutAssets/aboutImage-1.png";
import AboutImage2 from "../assets/aboutAssets/aboutImage-2.png";
import AboutImage3 from "../assets/aboutAssets/aboutImage-3.png";
import AboutImage4 from "../assets/aboutAssets/aboutImage-4.png";

const AboutContentText = () => {
  return (
    <div className="mt-16 w-1/2 pl-32">
      <h2 className=" font-bilbo text-3xl">About Us</h2>
      <div className="w-5/6">
        <h3 className="font-ubuntu text-4xl font-bold">
          Making Your Business More Unique
        </h3>
        <p className="mt-6 w-4/5 text-lg">
          As a leading software house, we provide solutions
          <br /> world-class software with technological and design exellence.
          <br />
          <br />
          Support by a team
          <br />
          commitment, we meet client's needs with high performance,noise and
          full of inovation.
        </p>
      </div>
      <button className="mt-4 rounded-full border-[1px] border-black px-4 py-2 ">
        Read More
      </button>
    </div>
  );
};

const AboutContentImage = () => {
  return (
    <div className="w-1/2">
      <div className="relative">
        <div className="absolute left-10 top-5 h-[160px] w-[160px] rounded-full border-2 border-black">
          <img
            src={AboutImage1}
            alt="About Image"
            className="h-full w-full rounded-full p-2"
          />
        </div>
        <div className="absolute right-16 top-72 mx-auto h-[360px] w-[360px]  -translate-y-1/2 rounded-full border-2 border-black">
          <img
            src={AboutImage2}
            alt="About Image"
            className="h-full w-full rounded-full p-2"
          />
        </div>
        <div className="absolute  left-4 top-96 h-48 w-48 rounded-full border-2 border-black">
          <img
            src={AboutImage3}
            alt="About Image"
            className="h-full w-full rounded-full p-2"
          />
        </div>
        <div className="absolute right-4 top-[30rem] h-24 w-24 rounded-full border-2 border-black ">
          <img
            src={AboutImage4}
            alt="About Image"
            className="h-full w-full rounded-full p-2"
          />
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <section className="flex h-screen w-full bg-white">
      <AboutContentImage />
      <AboutContentText />
    </section>
  );
};

export default AboutPage;
