const MainIntro = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-between">
        <div className="-translate-x-3">
          <img
            src="/motion art/main-logo.png"
            alt="main logo"
            height={210}
            width={210}
          />
        </div>
        <div>
          <button className="bg-white border-2 border-white rounded-lg px-4 py-3 font-semibold hover:text-white hover:bg-transparent text-black">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,3fr]">
        <div className="col-start-1 text-xl">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 font-semibold to-50% bg-clip-text text-transparent w-fit">
            Transform Your Website
          </div>
          <div>With Motion Art Effect</div>
        </div>
        <div className="col-start-2 flex flex-col gap-8">
          <div className="text-7xl">
            Attract Your Visitors Attention With Colorful
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 to-50% bg-clip-text text-transparent w-fit block font-semibold">
              Motion Art Effect
            </span>
          </div>
          <div className="text-base text-gray-400 tracking-wider">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainIntro;
