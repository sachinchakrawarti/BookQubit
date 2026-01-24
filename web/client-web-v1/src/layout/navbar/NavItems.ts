import {
  FaHome,
  FaBook,
  FaBoxes,
  FaUser,
  FaRobot,
  FaInfoCircle,
} from "react-icons/fa";

import type { IconType } from "react-icons";

export type NavItem = {
  name: string;
  path: string;
  icon: IconType; 
};

export const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Books", path: "/books", icon: FaBook },
  { name: "Comics", path: "/comics", icon: FaBook },
  { name: "Collections", path: "/collections", icon: FaBoxes },
  { name: "Authors", path: "/authors", icon: FaUser },
  { name: "AI Assistant", path: "/ai-assistant", icon: FaRobot },
  { name: "About Us", path: "/about-us", icon: FaInfoCircle },
];
