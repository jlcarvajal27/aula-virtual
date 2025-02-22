"use client";

import { SideBars } from "../../components/sidebar/SideBars";
import { IoNewspaperOutline, IoPersonSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

export default function MyCoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className="flex">
      <SideBars />
      <div className="flex flex-col w-full p-4 gap-10">
        <h1 className="flex items-center justify-center p-4 rounded-md text-2xl text-white font-bold bg-slate-800 mb-8">
          Habilidades digitales para el siglo XXI
        </h1>
        <div className="flex items-center justify-center py-6">
          contenedor para colocar un video que aun no tengo
        </div>

        <div className="flex justify-center items-center gap-8 mb-8 cursor-pointer">
          <div
            className="w-[300px] h-[80px] bg-gray-300 rounded-lg shadow-xl p-4 flex items-center justify-center flex-row gap-6"
            onClick={() => setIsModalOpen(true)}
          >
            <p className="text-6xl">
              <IoNewspaperOutline />
            </p>
            <h2 className="text-xl font-bold mb-2">Resultado de aprendizaje</h2>
          </div>

          <div
            className="w-[300px] h-[90px] bg-gray-300 rounded-lg shadow-xl p-4 flex flex-row items-center justify-center gap-6"
            onClick={() => setIsModalOpen2(true)}
          >
            <p className="text-6xl">
              <FaChalkboardTeacher />
            </p>
            <h2 className="text-xl font-bold mb-2">
              Profesor asignado al curso
            </h2>
          </div>

          <div className="w-[300px] h-[90px] bg-gray-300 rounded-lg shadow-xl p-4 flex flex-row items-center justify-center gap-6">
            <p className="text-6xl">
              <BsFillCameraReelsFill />
            </p>
            <h2 className="text-xl font-bold mb-2">Grabaciones</h2>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Primer Resultado"
            title2="Primer Resultado"
            imageSrc="/images/iconModal-2.png"
            imageAlt="Imagen del aula 1"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
          />
        )}
        {isModalOpen2 && (
          <Modal
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
            title="Profesor asignado"
          >
            <div className="flex flex-row gap-6 items-center border border-black rounded-lg p-6 w-full md:w-[500px] mx-auto">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-950 text-white font-bold rounded-full text-3xl shadow-xl">
                <IoPersonSharp />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Jorge carvajal M
                </h2>
                <p className="text-gray-600 mt-1">Jorgecorreo@ejemplo.com</p>
              </div>
            </div>
          </Modal>
        )}

        <div className="flex justify-center gap-4 cursor-pointer">
          <div className="relative mr-[-30px] z-20 w-64 h-80 bg-gray-500 rounded-xl shadow-black shadow-2xl p-4 flex flex-col justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <h2 className="text-xl font-bold text-gray-700">Unidad I</h2>
            </div>
            <p className="mt-4 text-center text-white">
              Introducción habilidades digitales
            </p>
          </div>

          <div className="relative mr-[-30px] z-10 w-64 h-80 bg-gray-400 rounded-lg shadow-black shadow-2xl p-4 flex flex-col justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <h2 className="text-xl font-bold text-gray-700">Unidad II</h2>
            </div>
            <p className="mt-4 text-center text-white">
              Introducción habilidades informáticas
            </p>
          </div>

          <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-black shadow-2xl p-4 flex flex-col justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <h2 className="text-xl font-bold text-gray-700">Unidad III</h2>
            </div>
            <p className="mt-4 text-center text-white">
              Introducción habilidades presenciales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
