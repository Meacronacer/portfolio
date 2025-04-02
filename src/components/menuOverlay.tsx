import React from "react";
import NavLink, { InavLink } from "./navLink";

interface props {
  links: InavLink[];
}

const MenuOverlay: React.FC<props> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
