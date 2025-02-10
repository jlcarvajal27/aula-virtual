"use client";
import { useState } from "react";
import { IoIosLogOut, IoMdMail } from "react-icons/io";
import { MdRoomPreferences } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 rounded-s-md"
      >
        Jorge Carvajal
        <div className="w-8 h-8 flex items-center justify-center bg-gray text-black font-bold rounded-full text-sm shadow-xl">
          Jc
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-50 right-0 top-8 w-48 bg-white shadow-xl rounded-md">
          <div className="flex flex-col items-start mx-2 p-2 text-sm">
            <Link
              href="/personal-area"
              className="w-full flex items-center gap-2 hover:bg-gray-200 rounded-md p-2"
            >
              <PiMapPinAreaFill />
              <span>Area Personal</span>
            </Link>

            <Link
              href="/profile"
              className="w-full flex items-center gap-2 hover:bg-gray-200 rounded-md p-2"
            >
              <IoPersonSharp />
              <span>Mi perfil</span>
            </Link>

            <Link
              href="/grades"
              className="w-full flex items-center gap-2 hover:bg-gray-200 rounded-md p-2"
            >
              <FaClipboardList />
              <span>Calificaciones</span>
            </Link>

            <Link
              href="/messages"
              className="w-full flex items-center gap-2 hover:bg-gray-200 rounded-md p-2"
            >
              <IoMdMail />
              <span>Mensajes</span>
            </Link>

            <Link
              href="/preferences"
              className="w-full flex items-center gap-2 hover:bg-gray-200 rounded-md p-2"
            >
              <MdRoomPreferences />
              <span>Preferencias</span>
            </Link>

            <br />

            <button className="w-full flex items-center gap-2 bg-blue-950 text-white rounded-md p-2">
              <IoIosLogOut />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
