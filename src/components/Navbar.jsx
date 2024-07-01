import { navLists } from "../constants";
import { appleImg, searchImg, bagImg } from "../utils";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem) => (
            <li
              key={navItem}
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
            >
              {navItem}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
