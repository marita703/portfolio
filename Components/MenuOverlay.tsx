import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: {
    href: string;
    title: string;
  }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            {" "}
            <NavLink href={link.href} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
