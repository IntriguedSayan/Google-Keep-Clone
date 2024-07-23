import React, { useState } from "react";
import { FaHome, FaBell, FaTag, FaBars, FaPen, FaTrash } from "react-icons/fa";
import "./Drawer.css";
import { NavLink } from "react-router-dom";
interface DrawerProps {
  children: React.ReactElement;
}
const menuItems = [
  {
    name: "Notes",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "Reminders",
    path: "/reminders",
    icon: <FaBell />,
  },
  {
    name: "Edit Labels",
    path: "/editlabels",
    icon: <FaPen />,
  },
  {
    name: "Bin",
    path: "/bin",
    icon: <FaTrash />,
  },
  {
    name: "Archive",
    path: "/archive",
    icon: <FaTag />,
  },
];

const Drawer: React.FC<DrawerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggleDrawer} />
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ width: isOpen ? "30rem" : "3.2rem" }} className="sidebar">
          {menuItems.map((elem, index) => (
            <NavLink
              to={elem.path}
              className={({ isActive }) => (!isActive ? "link" : "link active")}
              key={index}
            >
              <div className="icon">{elem.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {elem.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export { Drawer };
