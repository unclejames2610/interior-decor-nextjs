"use client";
import React, { FC, ReactNode } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  children: ReactNode;
  to: string;
  offset: number;
  mobileMenu: boolean;
}

const NavLink: FC<NavLinkProps> = ({
  children,
  to,
  offset = -50,
  mobileMenu = false,
}) => {
  return <div>NavLink</div>;
};

export default NavLink;
