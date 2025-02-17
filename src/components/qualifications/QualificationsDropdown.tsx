"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const QualificationsDropdown = () => {
  const [selectedCourse, setSelectedCourse] = useState("Todos los cursos");
  const [selectedOrder, setSelectedOrder] = useState("A - Z");
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const orderOptions = ["A - Z", "Z - A"];
  const courses = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"];

  const toggleOrderDropdown = () =>
    setIsOrderDropdownOpen(!isOrderDropdownOpen);
  const toggleCourseDropdown = () =>
    setIsCourseDropdownOpen(!isCourseDropdownOpen);

  return (
    <div className="relative flex items-center gap-4">
      <div className="relative">
        <button
          className="bg-gray-300 px-6 py-2 rounded-lg flex items-center gap-2 h-[40px]"
          onClick={toggleOrderDropdown}
        >
          {selectedOrder} <IoChevronDown />
        </button>
        <ul
          className={`absolute bg-white shadow-lg rounded-lg w-full mt-1 ${
            isOrderDropdownOpen ? "block" : "hidden"
          }`}
        >
          {orderOptions.map((order, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelectedOrder(order);
                setIsOrderDropdownOpen(false);
              }}
            >
              {order}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-4 md:mt-0">
        <button
          className="bg-gray-300 px-6 py-2 rounded-lg flex items-center gap-2 h-[40px]"
          onClick={toggleCourseDropdown}
        >
          {selectedCourse} <IoChevronDown />
        </button>
        <ul
          className={`absolute bg-white shadow-lg rounded-lg w-full mt-1 ${
            isCourseDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => {
              setSelectedCourse("Todos los cursos");
              setIsCourseDropdownOpen(false);
            }}
          >
            Todos los cursos
          </li>
          {courses.map((course, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelectedCourse(course);
                setIsCourseDropdownOpen(false);
              }}
            >
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QualificationsDropdown;
