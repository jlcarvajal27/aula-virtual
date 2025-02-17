import { SideBars } from "../../components/sidebar/SideBars";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function MyCoursesPage() {
  return (
    <div className="flex">
      <SideBars />
      <div className="flex flex-col w-full p-4">
        <h1 className="flex items-center justify-center p-4 rounded-md text-2xl text-white font-bold bg-slate-800 mb-8">
          Habilidades digitales para el siglo XXI
        </h1>
        <div className="flex items-center justify-center py-6">
          contenedor para colocar un video que aun no tengo
        </div>

        <div className="flex justify-center items-center gap-8 mb-8 cursor-pointer">
          <div className="w-[300px] h-[80px] bg-gray-300 rounded-lg shadow-xl p-4 flex items-center justify-center flex-row gap-6">
            <p className="text-6xl">
              <IoNewspaperOutline />
            </p>
            <h2 className="text-xl font-bold mb-2">Resultado de aprendizaje</h2>
          </div>

          <div className="w-[300px] h-[90px] bg-gray-300 rounded-lg shadow-xl p-4 flex flex-row items-center justify-center gap-6">
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

        {/* Contenedor para las siguientes 3 cards (más grandes) */}

        <div className="flex justify-center gap-4 cursor-pointer hover:transition-all ease-out">
          <div className="w-64 h-80 bg-gray-500 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <h2 className="text-xl font-bold text-gray-700">Unidad I</h2>
            </div>
            <p className="mt-4 text-center text-white">
              Introducción habilidades digitales
            </p>
          </div>

          <div className="w-64 h-80 bg-gray-500 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <h2 className="text-xl font-bold text-gray-700">Unidad II</h2>
            </div>
            <p className="mt-4 text-center text-white">
              Introducción habilidades informáticas
            </p>
          </div>

          {/* Card 6 */}
          <div className="w-64 h-80 bg-gray-500 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
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
