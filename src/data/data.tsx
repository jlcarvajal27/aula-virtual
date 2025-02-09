import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { LuCalendarClock, LuNotebook } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";

export interface CardItem {
  id: number;
  title: string;
  icon: React.ReactNode | null;
}
export const dataCard: CardItem[] = [
  {
    id: 1,
    title: "Calendario",
    icon: <LuCalendarClock />,
  },
  {
    id: 2,
    title: "TurnNitin",
    icon: <FaSearch />,
  },
  {
    id: 3,
    title: "Biblioteca",
    icon: <FaComputer />,
  },
  {
    id: 4,
    title: "Directorio",
    icon: <LuNotebook />,
  },
];
