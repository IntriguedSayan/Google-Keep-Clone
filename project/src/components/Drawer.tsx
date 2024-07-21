import React from "react";
import {
  FaHome,
  FaInfo,
  FaBell,
  FaTag,
  FaDownload,
  FaBars,
} from "react-icons/fa";
import "./Drawer.css";
interface DrawerProps{
    children: React.FC
}
const menuItems = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Notifications",
    icon: <FaBell />,
  },
  {
    name: "About",
    icon: <FaTag />,
  },
  {
    name: "Edit",
    icon: <FaInfo />,
  },
  {
    name: "Download",
    icon: <FaDownload />,
  },
];

const Drawer: React.FC = ({children}:DrawerProps) => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        {menuItems.map((elem, index) => (
          <div className="link" key={index}>
            <div className="icon">{elem.icon}</div>
            <div className="link_text">{elem.name}</div>
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export { Drawer };
