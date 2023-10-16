import Image from "next/image";
import HeroPage from "./hero/page";
import ProductsPage from "./products/page";
import ReferencePage from "./reference/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <ServicesPage />
      <ProductsPage />
      <ReferencePage />
    </div>
  );
}
