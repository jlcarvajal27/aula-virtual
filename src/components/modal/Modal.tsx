import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  title2?: string;
  imageSrc?: string;
  imageAlt?: string;
  content?: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  title2,
  imageSrc,
  imageAlt,
  content,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-96 flex flex-col">
        <div className="flex justify-between items-center p-3 w-full bg-gray-400 rounded-t-lg">
          <h3 className="font-bold text-black text-left">{title}</h3>
          <button className="text-2xl font-bold text-black" onClick={onClose}>
            X
          </button>
        </div>

        <div
          className={`${
            imageSrc ? "grid grid-cols-2" : "flex"
          } gap-2 w-full h-full`}
        >
          {imageSrc && imageAlt ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
            </div>
          ) : null}

          <div className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="font-bold text-2xl mb-2 text-left w-full">
              {title2}
            </h1>
            {content ? (
              <p className="text-gray-800 text-justify text-sm">{content}</p>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
