const AboutContentText = () => {
  return (
    <div className="mt-4 w-2/5 ">
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

const AboutPage = () => {
  return (
    <section className="flex h-screen w-full bg-white">
      <div className="w-3/5"></div>
      <AboutContentText />
    </section>
  );
};

export default AboutPage;
