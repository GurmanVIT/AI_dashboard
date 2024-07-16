import React from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { Button } from "react-bootstrap";
import next_icon from '../../assets/img/next_icon.svg';
import { useNavigate } from "react-router-dom";

const Project = () => {

    const navigation = useNavigate();

    return (
        <div className="sidebar_mar">
            <div className="header">
                <div className="user-info">
                    <img src={notification} alt='notification' className="notification-icon" />
                    <img src={user_icon} alt='user_icon' className="user-icon" />
                    <span className="username">username@gmail.com</span>
                    <img src={down_icon} alt='down_icon' className="dropdown-arrow" />
                </div>
            </div>

            <div className="project_btn_style">
                <h2>Projects</h2>
                <Button type="button" onClick={() => navigation('/CreateProject')}>Add New</Button>
            </div>

            <div className="magic_content_btn">
                <div className="label_input_flex">
                    <h4>Magic Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>

                <div className="active_btn_content">
                    <div className="active_column">
                        <button className="active_button">Active</button>
                        <p>5 Documents indexed</p>
                    </div>
                    <img src={next_icon} alt="next_icon" />
                </div>
            </div>

            <div className="magic_content_btn">
                <div className="label_input_flex">
                    <h4>Black Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>

                <div className="active_btn_content">
                    <div className="active_column">
                        <button className="active_button">Active</button>
                        <p>5 Documents indexed</p>
                    </div>
                    <img src={next_icon} alt="next_icon" />
                </div>
            </div>
        </div >
    );
};

export default Project;
