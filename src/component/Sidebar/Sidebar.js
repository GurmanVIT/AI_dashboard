// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaRegFileAlt, FaRegUser, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import ai_img from "../../assets/img/ai_img.svg";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='my-3'>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="top-section">
                    <h1 className="logo"><img src={ai_img} alt='ai_img' />Logotype</h1>
                    <div className="bars" onClick={toggleSidebar}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                <FaRegFileAlt /> <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <FaRegUser /> <span>Your AI</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <FaProjectDiagram /> <span>Integrations</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <FaProjectDiagram /> <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <FaFileAlt /> <span>Documents</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <FaTimes /> <span>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
