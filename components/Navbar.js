import Logo from "./Logo";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import NavMenu from "./NavMenu";
import { useState } from "react";
import classnames from "classnames";
import DarkMdButton from "./DarkModeBt";

export default function Navbar() {

  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <div className="flex items-center px-6 py-6 lg:mx-14 md:pl-5">
        <div className="w-6/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <NavMenu 
            dir="horizontal"
          />
        </div>

        {/* Mobile */}
        <div className="w-9/12 text-right md:hidden">
          <IoMenuOutline className="inline-block h-6 w-6 dark:text-white" onClick={()=> setOffcanvas(true)} />
        </div>
      </div>
      <div className={classnames("fixed bg-white dark:bg-drk z-10 top-0 h-full w-full p-10 md:hidden transition-all", offcanvas ? "right-0" : "-right-full")}>
        <IoCloseOutline className="absolute h-8 w-8 right-8 top-8 dark:text-white" onClick={()=> setOffcanvas(false)} />
        <NavMenu
          dir="vertical"
          onClick={()=>setOffcanvas(false)}
        />
      </div>
    </>
  );
}
