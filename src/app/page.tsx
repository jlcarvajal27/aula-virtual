import Cards from "../components/cards/Cards";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="p-6">
        <Hero />
        <Cards />
      </div>
    </div>
  );
}
