const services = [
  {
    title: "Web Development",
    desc: "Designing and building applications accessible through browsers, providing interactive and responsive experiences on online platforms.",
    image: "/src/assets/serviceAssets/web.svg",
  },
  {
    title: "Mobile Development",
    desc: "Focused on creating applications for mobile devices, optimizing user experiences on iOS, Android, or other platforms.",
    image: "/src/assets/serviceAssets/mobile.svg",
  },
  {
    title: "Desktop Development",
    desc: "Software development for desktop computers, creating powerful and efficient applications for use on PC or Mac.",
    image: "/src/assets/serviceAssets/desktop.svg",
  },
  {
    title: "Internet of Things",
    desc: "Building digitally connected solutions for physical devices, enabling data exchange and control over the internet network.",
    image: "/src/assets/serviceAssets/iot.svg",
  },
];

function Service() {
  return (
    <div className="relative z-10 w-full bg-white p-10 font-ubuntu md:p-16 lg:py-28">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-[#22D6A4] to-[#4284D3] bg-clip-text font-bilbo text-4xl text-transparent md:text-[40px]">
          Our Services
        </h1>
        <p className="text-5xl font-bold">Service We Provide</p>
      </div>
      <div className="mt-28 flex flex-wrap items-center justify-center gap-x-12 gap-y-20 md:mt-32 lg:mt-36">
        {services.map(({ title, desc, image }) => (
          <>
            <div className="relative h-[290px] w-[280px] rounded-lg bg-slate-100 p-2 text-center">
              <div className="absolute -top-[50px] left-0 z-10 flex w-full justify-center">
                <div className="mx-auto flex h-[100px] w-[100px] items-start justify-center bg-[url('/src/assets/serviceAssets/image-container.svg')] pt-4">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="mt-20">
                <h2 className="text-2xl font-bold text-[#3A3A3A]">{title}</h2>
                <p className="mt-8">{desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="service-button mt-10 scale-75 md:mt-16 md:scale-90 lg:mt-20 lg:scale-100 "
        >
          <p className="bg-gradient-to-r from-[#22D6A4] to-[#4284D3] bg-clip-text text-[30px] text-transparent">
            View Details
          </p>
        </a>
      </div>
      <img
        src="/src/assets/serviceAssets/vector1.svg"
        alt="service-vector1"
        className="absolute bottom-56 left-4 -z-10 md:left-8"
      />
      <img
        src="/src/assets/serviceAssets/vector1.svg"
        alt="service-vector1"
        className="absolute right-4 top-64 -z-10 md:right-16 md:top-20"
      />
      <img
        src="/src/assets/serviceAssets/vector2.svg"
        alt="service-vector1"
        className="absolute left-4 top-16 -z-10 md:left-8 md:top-28"
      />
    </div>
  );
}

export default Service;
