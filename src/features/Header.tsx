import bars from "@/assets/icons/bars-solid-full.svg";
import menus from "@/data/menus";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute z-1 top-15 md:top-27 glass-btn flex text-white/90 font-semibold text-lg w-full max-w-xs md:max-w-xl lg:max-w-2xl">
      {/* mobile */}
      <div className="md:hidden lg:hidden flex flex-row justify-between items-center w-full gap-20 py-1.5 px-2">
        <p className="hover:bg-white/20 rounded-full py-1 px-2 transition-all duration-300 ease-in menu-btn">
          Menu
        </p>
        <img
          src={bars}
          alt="menu"
          className="menu-btn w-9"
        />
      </div>

      {/* desktop */}
      <div className="hidden md:flex lg:flex flex-row justify-center items-center w-full gap-20 py-1.5">
        {menus.map((m) => (
          <Link
            key={m.id}
            to={m.url}
            className="menu-btn">
            {m.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
