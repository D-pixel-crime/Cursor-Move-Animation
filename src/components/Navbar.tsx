const Navbar = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full py-6 px-8 bg-neutral-800 h-fit text-white">
      <nav>
        <ul className="w-full flex justify-between items-center">
          <li className="flex-center text-2xl">
            <img
              src="/motion art/navbar-leaf.png"
              alt="navbar leaf symbol"
              height={37}
              width={37}
              className="inline-block flex-center"
            />
            <span className="font-semibold flex-center">envato</span>
            <span className="text-[yellowgreen] font-extralight flex-center">
              market
            </span>
          </li>
          <li className="flex-center">
            <button className="bg-[yellowgreen] flex-center shadow-md shadow-black rounded-lg text-black font-semibold hover:bg-transparent hover:text-[yellowgreen] border border-[yellowgreen] p-2 tracking-tighter">
              Buy now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
