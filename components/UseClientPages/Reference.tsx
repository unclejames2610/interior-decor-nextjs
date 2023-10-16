"use client";
import React, { FC } from "react";

import { referenceTitle, referenceSubtitle } from "@/data";
import imageOne from "@/public/assets/image-one.svg";
import imageTwo from "@/public/assets/image-two.svg";
import imageThree from "@/public/assets/image-three.svg";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const Reference: FC = () => {
  return (
    <div className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <Image src={imageOne} alt="" />
            <Image src={imageTwo} alt="" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div>
            <Image src={imageThree} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Reference;
