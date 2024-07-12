// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ai_img from "../../assets/img/ai_img.svg";
import dashboard_icon from "../../assets/img/dashboard_icon.svg";
import ai_icon from "../../assets/img/Ai Icon.svg";
import Integrations from "../../assets/img/Integrations.svg";
import box from "../../assets/img/project.svg";
import Documents from "../../assets/img/Documents.svg";
import logout from "../../assets/img/logout.svg";

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
                            <NavLink exact to="/Dashboard" activeClassName="active">
                                <img src={dashboard_icon} alt='dashboard_icon' /> <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <img src={ai_icon} alt='ai_icon' /> <span>Your AI</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <img src={Integrations} alt='Integrations' /> <span>Integrations</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <img src={box} alt='box' /> <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                <img src={Documents} alt='Documents' /> <span>Documents</span>
                            </NavLink>
                        </li>
                        <li className='logout'>
                            <NavLink to="/">
                                <img src={logout} alt='logout' /> <span>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
