import { Link, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContex";
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
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
     items-center  text-black dark:text-[#D1D5DB] backdrop-blur bg-[#eee] 
     dark:bg-[#1F2937] w-full
       sticky px-2 md:px-4 h-[3.4rem] "
    >
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center">
          <span className="text-gray-600 font-semibold  ">Apple Az</span>
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
            className="w-[6rem] h-[2rem] md:h-[2rem] text-[13px] p-1 sm:w-[7rem] shadow-inner-md
             bg-transparent s md:w-[12rem]  border rounded-lg placeholder:text-[12px]"
            type="text"
            placeholder="Axtar..."
          />
          <button
            type="submit"
            className="absolute text-[#222] dark:text-[#aaa] top-1.5 right-0
             md:right-1 px-1 md:top-1.5 md:border-l text-[20px] md:text-[20px]"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      {/* Login && mobilemenu */}

      <div className="flex gap-2">
        <div className="flex md:gap-4 gap-2 items-center text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1  ">
            <span className="text-[20px] md:text-[20px]">
              {" "}
              <FaUser />
            </span>
            <span className="hidden md:block"> Daxil ol</span>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-1 relative"
          >
            <span
              className="absolute  text-white rounded-full 
             bg-red-500 text-[12px] md:text-[12px]   flex items-center justify-center
               w-[.8rem] h-[.8rem] md:w-[1rem] md:h-[1rem]
              top-0  right-0 md:left-4"
            >
              {itemAmount}
            </span>
            <span className=" text-[23px] md:mx-1 md:text-[24px]">
              <RiShoppingCart2Fill />{" "}
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
