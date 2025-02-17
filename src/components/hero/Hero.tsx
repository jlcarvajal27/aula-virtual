import React from "react";
import SwiperComponent from "./SwiperComponent";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1>Bienvenido a la pagina de inicio!</h1>
      <SwiperComponent />
    </div>
  );
};

export default Hero;
