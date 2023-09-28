"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    href: "#About",
    title: "About",
  },
  {
    href: "#Projects",
    title: "Projects",
  },
  {
    href: "#Contact",
    title: "Contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33335f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
