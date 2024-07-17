import React from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { Button } from "react-bootstrap";
import next_icon from '../../assets/img/next_icon.svg';

const ProjectEdit = () => {

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

            <h2>Projects</h2>
            <div className="project_btn_styles">
                <h3>Project Name</h3>
                <Button type="button">Edit Project</Button>
            </div>

            <div className="magic_content_btn">
                <div className="label_input_flex">
                    <h4>Magic Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>Magic Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>Magic Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>

                <div className="label_input_flex">
                    <h4>Magic Project</h4>
                    <p>TheAd, 9/89-97 Jones St,
                        Ultimo NSW 2007, Australia
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ProjectEdit;
