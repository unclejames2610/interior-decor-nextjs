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
  const className = mobileMenu
    ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
    : "text-lg lf:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent";

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
    ></Link>
  );
};

export default NavLink;
