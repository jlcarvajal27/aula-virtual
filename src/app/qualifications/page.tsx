import QualificationsDropdown from "@/components/qualifications/QualificationsDropdown";
import React from "react";
import { GiStabbedNote } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8">
      <h1 className="text-2xl font-bold mb-6">Calificaciones</h1>

      <div className="flex items-center justify-center gap-4 mb-6">
        <QualificationsDropdown />

        <input
          type="text"
          placeholder="Buscar"
          className="border border-gray-500 rounded-md px-4 py-2 w-full md:w-auto h-[40px]"
        />
      </div>

      <div className="bg-gray-100 p-12 rounded-lg shadow-lg flex flex-col items-start">
        <div className="flex flex-row items-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-950 text-white font-bold rounded-full text-3xl shadow-xl">
            <IoPersonSharp />
          </div>
          <span className="text-lg font-semibold">Jorge Carvajal M</span>
        </div>

        <div className="grid grid-cols-2 gap-12 w-full">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[480px] h-[120px] bg-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 gap-4"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="text-xl font-bold">
                  Habilidades digitales del siglo XXI
                </h2>
                <button className="flex flex-row items-center bg-blue-950 text-white px-6 py-2 gap-2 rounded-lg">
                  <GiStabbedNote />
                  <span className="text-sm">Calificaciones</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
