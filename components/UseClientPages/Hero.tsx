"use client";
import React, { FC, useState } from "react";

// local imports
import heroImage from "@/public/assets/hero-image.svg";
import logo from "../../public/assets/logo.svg";
import cartIcon from "@/public/assets/cart-icon.svg";
import searchIcon from "@/public/assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "@/data";

import FadeIn from "@/components/FadeIn";
import NavLink from "@/components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div
      className={`h-screen relative bg-my_bg_image bg-cover bg-bottom bg-no-repeat flex flex-col items-center`}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10 ">
        {/* <img src={logo} alt="" /> */}
        <Image src={logo} alt="" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]"></ul>
      </div>
    </div>
  );
};

export default Hero;
