// local imports
import shippingIcon from "@/public/assets/free-shiping-icon.svg";
import paymentIcon from "@/public/assets/quick-payment-icon.svg";
import supportIcon from "@/public/assets/support-icon.svg";
import productOneIcon from "@/public/assets/product-one.svg";
import productTwoIcon from "@/public/assets/produc-two.svg";
import productThreeIcon from "@/public/assets/product-three.svg";
import plantIcon from "@/public/assets/plant-icon.svg";
import sunIcon from "@/public/assets/sun-icon.svg";
import waterIcon from "@/public/assets/water-icon.svg";
import temperatureIcon from "@/public/assets/temperature-icon.svg";
import { SVGProps } from "react";
import { StaticImageData } from "next/image";

export const heroTitle: string =
  "Bring Serenity to Your Place With Interior Plants";
export const heroSubtitle: string =
  "find your dream plant for your home decoration with us, and we will make it happen.";

export interface servicesProps {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}

export const services: servicesProps[] = [
  {
    title: "Free Shipping",
    subtitle: "No charge for your delivery",
    icon: shippingIcon,
  },
  {
    title: "Quick Payment",
    subtitle: "100% secure",
    icon: paymentIcon,
  },
  {
    title: "24/7 Support",
    subtitle: "Don't hesitate to contact us",
    icon: supportIcon,
  },
];

export const productsTitle: string = "Best Selling Products";
export const productsBtnText: string = "See Collection";

export interface productsProps {
  title: string;
  price: string;
  img: StaticImageData;
}

export const products: productsProps[] = [
  {
    title: "Golden Pothos",
    price: "$65.99",
    img: productOneIcon,
  },
  {
    title: "Rubber Plant",
    price: "$75.00",
    img: productTwoIcon,
  },
  {
    title: "Cast Iron Plant",
    price: "$88.50",
    img: productThreeIcon,
  },
];

export const referenceTitle: string = "Interior Plants Reference";
export const referenceSubtitle: string =
  "make your home cozy with refreshing plants";

export const careTitle: string = "How to care for plants";
export const careSubtitle: string = "Take care of plants with all your heart";

export interface careListProps {
  title: string;
  subtitle: string;
  img: StaticImageData;
}

export const careList: careListProps[] = [
  {
    title: "Adjust Lighting",
    subtitle:
      "When caring for houseplants, make sure the room temperature is neither too cold nor too hot.",
    img: sunIcon,
  },
  {
    title: "Don't water too often",
    subtitle:
      "Watering ornamental houseplants does not have to be done every day.",
    img: waterIcon,
  },
  {
    title: "Choose the right container.",
    subtitle:
      "Houseplants will need different containers depending on their type and size.",
    img: plantIcon,
  },
  {
    title: "Fertilize regularly",
    subtitle:
      "The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength.",
    img: temperatureIcon,
  },
];

export const newsletter: string = "Newsletter";

export interface footerLinksProps {
  title: string;
  links: string[];
}

export const footerLinksColumnOne: footerLinksProps[] = [
  {
    title: "Support",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "Useful Links",
    links: ["Payment & Tax", "Terms of service", "Privacy Policy"],
  },
];

export const footerLinksColumnTwo: footerLinksProps[] = [
  {
    title: "Our Menu",
    links: ["Best Product", "Categories"],
  },
  {
    title: "Address",
    links: [
      "JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia",
      "hallo@daunku.com",
    ],
  },
];
