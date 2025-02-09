import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="py-4">
        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
