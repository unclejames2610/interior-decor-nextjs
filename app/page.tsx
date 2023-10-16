import Image from "next/image";
import HeroPage from "./hero/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <ServicesPage />
    </div>
  );
}
