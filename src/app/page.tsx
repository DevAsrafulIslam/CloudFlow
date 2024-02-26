import Image from "next/image";
import { Header } from "./components/services/header";
import Banner from "./components/banner/banner";
import Brandslide from "./components/brandslide/brandslide";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Testimonial from "./components/testimonial/testimonial";
import About2 from "./components/about2/about2";

export default function Home() {
  return (
    <div>
      <div className="py-3 md:flex-none border-b-2">
        <Header />
      </div>
      <Banner />
      <Brandslide />
      <About />
      <Gallery />
      <Testimonial />
      <About2 />
    </div>
  );
}
