import Link from "next/link";
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineMessage } from "react-icons/md";
import { PiBellRinging } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="px-10 py-0 w-full bg-gray-200 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-3xl">
          <IoNewspaperOutline />
          <TfiEmail />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-center font-bold text-3xl my-2">DineCud</span>
          <span className="text-xs">
            Doctorado en innovación educativa y cultura general
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 text-xl">
          <PiBellRinging />
          <MdOutlineMessage />
          <UserMenu />
        </div>
      </div>

      <div className="flex">
        <Link
          className="m-2 p-2 mr-14 hover:underline hover:decoration-red-500 hover:underline-offset-4 hover:decoration-2"
          href="/"
        >
          Inicio
        </Link>
        <Link
          className="m-2 p-2 hover:underline hover:decoration-red-500 hover:underline-offset-4 hover:decoration-2"
          href="/my-courses"
        >
          Mis cursos
        </Link>
        <Link
          className="m-2 p-2 hover:underline hover:decoration-red-500 hover:underline-offset-4 hover:decoration-2"
          href="/certifications"
        >
          Certificaciones
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
