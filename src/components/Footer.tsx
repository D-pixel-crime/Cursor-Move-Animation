const Footer = () => {
  return (
    <div className="bg-gradient-to-r text-sm px-20 py-4 from-orange-500 to-violet-700 to-80% mt-40 flex justify-between items-center">
      <div>&copy; 2023 Copyright. All rights reserved by QodeMatrix</div>
      <div className="flex gap-7">
        <div className="text-slate-300 cursor-pointer hover:text-white hover:scale-105 transition">
          Documentation
        </div>
        <div className="text-slate-300 cursor-pointer hover:text-white hover:scale-105 transition">
          Support
        </div>
      </div>
    </div>
  );
};
export default Footer;
