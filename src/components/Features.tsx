const Features = () => {
  return (
    <div className="flex items-center flex-col gap-10">
      <div className="text-4xl">An All-Round Plugin With Powerful Features</div>
      <div className="text-slate-400 w-1/2 text-center">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex rounded-2xl flex-col h-full gap-6 bg-gradient-to-b from-slate-900 to-violet-900/40 p-8">
          <img
            src="/motion art/thunder.png"
            alt="thunder"
            height={200}
            width={200}
          />
          <div className="text-2xl text-slate-200">Light Weight</div>
          <div className="text-slate-400">
            Motion Art for Elementor is designed to be lightweight.
          </div>
        </div>
        <div className="flex rounded-2xl flex-col h-full gap-6 bg-gradient-to-b from-slate-900 to-violet-900/40 p-8">
          <img
            src="/motion art/thumbs-up.png"
            alt="thumbs up"
            height={200}
            width={200}
          />
          <div className="text-2xl text-slate-200">100% Responsive</div>
          <div className="text-slate-400">
            Create a consistent visual experience across all devices.
          </div>
        </div>
        <div className="flex rounded-2xl flex-col h-full gap-6 bg-gradient-to-b from-slate-900 to-violet-900/40 p-8">
          <img src="/motion art/moon.png" alt="moon" height={200} width={200} />
          <div className="text-2xl text-slate-200">User Friendly Interface</div>
          <div className="text-slate-400">
            Ensure a smooth experience for both applicants and administrators.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
