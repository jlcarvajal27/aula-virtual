import React from "react";
import Card from "./Card";
import { dataCard } from "@/data/data";

const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-6 my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataCard.slice(0, 3).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6">
        <Card item={dataCard[3]} className="w-[350px] h-[70px]" isLast />
      </div>
    </div>
  );
};

export default Cards;
