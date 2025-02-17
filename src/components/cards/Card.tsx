import { CardItem } from "@/data/data";

interface CardProps {
  item: CardItem;
  className?: string;
  isLast?: boolean;
}

export default function Card({ item, className, isLast }: CardProps) {
  return (
    <div
      className={`flex items-center justify-center flex-col my-6 bg-white shadow-xl border border-slate-200 rounded-lg p-6 transition duration-300 hover:scale-110 cursor-pointer w-96 ${className}`}
    >
      <div
        className={`flex ${
          isLast ? "flex-row gap-2" : "flex-col gap-2"
        } items-center`}
      >
        <div className="text-slate-600 text-5xl">{item.icon}</div>
        <h5 className="ml-3 text-slate-600 text-xl font-semibold">
          {item.title}
        </h5>
      </div>
    </div>
  );
}
