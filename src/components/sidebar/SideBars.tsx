"use client";

import { IoHome } from "react-icons/io5";
import Dropdown from "./DropDownSideBar";
import { useState } from "react";

export const SideBars = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({
    inicio: false,
    unidad1: false,
    unidad2: false,
    unidad3: false,
  });

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      style={{ width: "400px" }}
      className="bg-gray-200 min-h-screen z-10 w-64 left-0 border border-gray-300"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center justify-between text-lg md:text-2xl font-bold cursor-pointer">
          <IoHome size={25} className="text-black mr-1" />
          <span className="text-black text-xl">X</span>
        </h1>
      </div>

      <div className=" flex flex-col gap-2 mt-10">
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
