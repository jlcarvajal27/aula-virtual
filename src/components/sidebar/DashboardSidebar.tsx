"use client";

import { BiMessageSquareDetail } from "react-icons/bi";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export const DashboardSideBars = () => {
  const [closeSidebar, setCloseSidebar] = useState(false);

  const toggleSidebar = () => {
    setCloseSidebar(!closeSidebar);
  };

  return (
    <div className="relative flex">
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-500 text-white p-2 h-20 w-20 rounded-full"
      >
        {closeSidebar ? (
          <IoIosArrowDropleftCircle size={40} />
        ) : (
          <IoIosArrowDroprightCircle size={40} />
        )}
      </button>

      <div
        style={{ width: closeSidebar ? "0px" : "130px" }}
        className={clsx(
          "bg-gray-200 min-h-screen z-10 border border-gray-300 transition-all duration-300 overflow-hidden",
          closeSidebar ? "max-w-0" : "max-w-[130px]"
        )}
      >
        <div
          className={clsx("flex flex-col gap-2 mt-10", {
            hidden: closeSidebar,
          })}
        >
          <Link
            href="/foro"
            className="flex flex-col items-center gap-4 p-4 rounded-md text-gray-800 hover:bg-gray-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800">
              <BiMessageSquareDetail size={30} className="text-white" />
            </div>
            <span>Foro</span>
          </Link>

          <Link
            href="/sala"
            className="flex flex-col items-center gap-4 p-4 rounded-md text-gray-800 hover:bg-gray-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800">
              <FaChalkboardTeacher size={30} className="text-white" />
            </div>
            <span>Sala</span>
          </Link>

          <Link
            href="/recursos"
            className="flex flex-col items-center gap-4 p-4 rounded-md text-gray-800 hover:bg-gray-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800">
              <IoNewspaper size={30} className="text-white" />
            </div>
            <span>Recursos</span>
          </Link>

          <Link
            href="/mi-comunidad"
            className="flex flex-col items-center gap-4 p-4 rounded-md text-gray-800 hover:bg-gray-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800">
              <FaUsers size={30} className="text-white" />
            </div>
            <span>Comunidad</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
