import { createElement, useState } from "react";
import { content } from "../../Content";

const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
       <div
        className="sm:cursor-pointer lg:fixed lg:top-10 lg:mt-0 mt-8 lg:left-10 z-50 "
        
      >
        <div className="mx-7">
          <a href="#home"><h4 className="text-2xl uppercase font-bold">
            Nasim<span className="text-cyan-600">Dev</span>Droid
          </h4></a>
        </div>
      </div>
      <nav
        className="fixed  z-[999] flex items-center gap-5 bg-cyan-600 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10"
      >
        {nav.map((item, i) => (
          <a key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-slate-950 text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
