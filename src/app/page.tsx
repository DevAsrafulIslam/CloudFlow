import Image from "next/image";
import { Header } from "./components/services/header";

export default function Home() {
  return (
    <div>
      <div className="py-3 md:flex-none border-b-2">
        <Header />
      </div>
    </div>
  );
}
