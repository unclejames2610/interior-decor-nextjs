"use client";
import React, { FC, ReactNode, useEffect, useRef } from "react";
// framer motion
import { motion, useAnimation, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay: number;
  direction: string;
  fullWidth: number;
  padding: number;
}

const FadeIn: FC<FadeInProps> = ({
  children,
  delay,
  direction,
  fullWidth,
  padding,
}) => {
  return <div>FadeIn</div>;
};

export default FadeIn;
