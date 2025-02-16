"use client";

interface DropdownProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Dropdown = ({ title, isOpen, setIsOpen }: DropdownProps) => {
  return (
    <div className="relative inline-flex w-80">
      <button
        className="w-full py-3 px-4 inline-flex items-center justify-between text-sm font-medium rounded-lg border border-gray-300 bg-gray-300 text-gray-800 shadow-sm"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`size-6 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full mt-1 w-full bg-white shadow-md rounded-lg dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="p-1 space-y-0.5">
            {[
              "presentacion",
              "Actividad I",
              "Actividad II",
              "Cuestionario",
            ].map((item) => (
              <a
                key={item}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
