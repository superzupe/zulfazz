import bars from "@/assets/icons/bars-solid-full.svg";
import menus from "@/data/menus";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute z-1 top-15 md:top-27 glass-btn flex text-white/90 font-semibold text-lg w-full max-w-xs md:max-w-xl lg:max-w-2xl">
      {/* mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden lg:hidden flex flex-row justify-between items-center w-full gap-20 py-1.5 px-2">
        <p className="hover:bg-white/20 rounded-full py-1 px-2 transition-all duration-300 ease-in menu-btn">
          Menu
        </p>
        <img
          src={bars}
          alt="menu"
          className="menu-btn w-9"
        />
      </button>

      {isMenuOpen && (
        <div className="absolute md:hidden top-17 glass-btn4 flex flex-col w-full max-w-xs text-white/90 font-semibold text-lg overflow-hidden">
          {menus.map((m, index) => (
            <Link
              key={m.id}
              to={m.url}
              onClick={() => setIsMenuOpen(false)}
              className={`
                px-4 py-2 hover:bg-white/10 transition
                ${index !== menus.length - 1 ? "border-b border-white/20" : ""}
              `}>
              {m.title}
            </Link>
          ))}
        </div>
      )}

      {/* desktop */}
      <div className="hidden md:flex flex-row justify-center items-center w-full gap-20 py-1.5">
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
