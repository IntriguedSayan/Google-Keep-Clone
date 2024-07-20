// Sidebar.tsx
import React, { useState } from 'react';
import './SliderDrawer.css';
import { FaHome, FaInfo, FaBell, FaTag, FaPen, FaDownload, FaTrash } from 'react-icons/fa';

export const SliderDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar} className="toggle-button">
                ☰
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <FaHome />
                        {isOpen && <span>Home</span>}
                    </li>
                    <li>
                        <FaBell />
                        {isOpen && <span>Notifications</span>}
                    </li>
                    <li>
                        <FaTag />
                        {isOpen && <span>Tags</span>}
                    </li>
                    <li>
                        <FaInfo />
                        {isOpen && <span>About</span>}
                    </li>
                    <li>
                        <FaPen />
                        {isOpen && <span>Edit</span>}
                    </li>
                    <li>
                        <FaDownload />
                        {isOpen && <span>Download</span>}
                    </li>
                    <li>
                        <FaTrash />
                        {isOpen && <span>Trash</span>}
                    </li>
                </ul>
            </div>
        </div>
    );
};
