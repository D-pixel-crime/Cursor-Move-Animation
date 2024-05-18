const Tabs = () => {
  return (
    <div className="flex flex-col gap-24 mt-10">
      <div className="text-center text-4xl font-semibold">
        Apply On Any Section Or Enable For Whole Page
      </div>
      <div className="flex justify-evenly gap-5">
        <div className="flex gap-8 flex-col rounded-2xl h-fit bg-gradient-to-b from-slate-900 to-violet-900/40 px-8 py-10">
          <div className="text-2xl text-slate-200 font-medium">
            Apply On Section
          </div>
          <div className="text-base text-slate-400">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </div>
          <img src="/motion art/section2.png" alt="section2" />
        </div>
        <div className="flex gap-8 mt-14 flex-col h-fit rounded-2xl bg-gradient-to-bl from-slate-900 to-violet-900/40 px-8 py-10">
          <div className="text-2xl text-slate-200 font-medium">
            Apply On Page
          </div>
          <div className="text-base text-slate-400">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </div>
          <img src="/motion art/section1.png" alt="section1" />
        </div>
      </div>
    </div>
  );
};
export default Tabs;
