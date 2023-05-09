import { Link, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContex";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../public/images/logo2.png";
import DarkMode from "./DarkMode";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { isOpen, setIsOpen } = useSidebar();
  const { itemAmount } = useContext(CartContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      return;
    }
    navigate(`/allproduct/${query}`);
    setQuery("");
  };
  return (
    <header
      className="flex shadow-inner justify-between md:justify-around
     items-center  text-black dark:text-[#aaa] backdrop-blur bg-[#eee] dark:bg-[#3b3a3a] w-full
       sticky py-1 px-2 md:px-4 "
    >
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center">
          <img src={Logo} className=" w-16  sm:h-16" alt="apple logo" />
          <span className="self-center  font-semibold hidden md:block ">
            Apple Az
          </span>
        </Link>
      </div>

      {/* Navbar
      <nav className="">
        <ul
          className={`md:flex gap-4 md:items-center md:pb-0 pb-12 absolute md:static bg-[#222] text-white md:text-black md:bg-transparent
        md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in
        ${toggle ? "top-[4.5rem] opacity-100" : "top-[4.5rem]  opacity-0"}`}
        >
          <li className="text-red-500">Əlaqə</li>
        </ul>
      </nav> */}

      {/* Search */}

      <div className=" relative">
        <form onSubmit={handleSearch}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[6rem] h-[2rem] md:h-[2.5rem] p-1 sm:w-[7rem] shadow-inner-md
             bg-transparent s md:w-[12rem]  border rounded-lg placeholder:text-[14px]"
            type="text"
            placeholder="Axtar..."
          />
          <button
            type="submit"
            className="absolute text-[#222] dark:text-[#aaa] top-2 right-0
             md:right-1 md:top-2 md:border-l border-black text-[20px] md:text-[30px]"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      {/* Login && mobilemenu */}

      <div className="flex gap-2">
        <div className="flex md:gap-4 items-center">
          <div className="flex items-center gap-1">
            <span className="text-[25px] md:text-[30px]">
              {" "}
              <AiOutlineUser />
            </span>
            <span className="hidden md:block"> Daxil ol</span>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-1 relative"
          >
            <span
              className="absolute  text-white rounded-full 
             bg-red-500 text-[12px] md:text-[15px]   flex items-center justify-center  w-[.8rem] h-[.8rem] md:w-[1rem] md:h-[1rem]
              top-0  right-0 md:left-4"
            >
              {itemAmount}
            </span>
            <span className=" text-[25px] md:text-[30px]">
              <AiOutlineShoppingCart />{" "}
            </span>{" "}
            <span className="hidden md:block"> Səbət</span>
          </div>
        </div>
        <div>
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
