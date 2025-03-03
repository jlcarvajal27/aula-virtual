"use client";

import { IoHome } from "react-icons/io5";
import Dropdown from "./DropDownSideBar";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export const SideBars = () => {
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({
    inicio: false,
    unidad1: false,
    unidad2: false,
    unidad3: false,
  });

  const toggleSidebar = () => {
    setCloseSidebar(!closeSidebar);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      style={{ width: "400px" }}
      className={clsx(
        "bg-gray-200 min-h-screen z-10 left-0 border border-gray-300 transition-all duration-300 overflow-hidden",
        closeSidebar ? "max-w-0 w-0" : "max-w-[400px] w-64"
      )}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center justify-between text-lg md:text-2xl font-bold cursor-pointer">
          <Link href="/">
            <IoHome size={25} className="text-black mr-1" />
          </Link>
          <span className="text-black text-xl" onClick={toggleSidebar}>
            {closeSidebar ? "" : "X"}
          </span>
        </h1>
      </div>

      <div
        className={clsx("flex flex-col gap-2 mt-10", { hidden: closeSidebar })}
      >
        <Dropdown
          title="Inicio"
          isOpen={openDropdowns.inicio}
          setIsOpen={() => toggleDropdown("inicio")}
        />
        <Dropdown
          title="Unidad I"
          isOpen={openDropdowns.unidad1}
          setIsOpen={() => toggleDropdown("unidad1")}
        />
        <Dropdown
          title="Unidad II"
          isOpen={openDropdowns.unidad2}
          setIsOpen={() => toggleDropdown("unidad2")}
        />
        <Dropdown
          title="Unidad III"
          isOpen={openDropdowns.unidad3}
          setIsOpen={() => toggleDropdown("unidad3")}
        />
      </div>
    </div>
  );
};
