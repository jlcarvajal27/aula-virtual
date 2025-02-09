import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-10  w-full bg-gray-200 shadow-lg">
      <div className="flex justify-between items-center py-2">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <TfiWorld className="text-2xl" />
            <span>Moodle theme</span>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneVolume className="text-2xl" />
            <span>Mobile: +573733930202</span>
          </li>
          <li className="flex items-center gap-2">
            <ImMail4 className="text-2xl" />
            <span>asistenciadinecud@hotmail.com</span>
          </li>
        </ul>

        <div className="flex flex-col">
          <span className="font-bold text-2xl text-slate-800">DINECUD</span>
          <span className="text-xs">All rights reserved</span>
        </div>

        <div>
          <Image
            src="/images/logo-cartagena.png"
            alt="logo universidad"
            width={130}
            height={130}
          />
        </div>
        <div className="flex flex-col gap-2 text-xl cursor-pointer">
          <span>
            <IoLogoFacebook />
          </span>
          <span>
            <FaSquareWhatsapp />
          </span>
        </div>

        <button className="font-semibold bg-white shadow-xl border border-slate-200 rounded-lg p-4">
          Resumen de retención de datos
        </button>
      </div>
    </div>
  );
};

export default Footer;
