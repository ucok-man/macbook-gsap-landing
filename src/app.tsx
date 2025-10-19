import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProductViewer from "./components/product-viewer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
