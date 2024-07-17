import React, { useState } from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import drive_2 from '../../assets/img/drive_2.svg';
import gmail_2 from '../../assets/img/gmail_2.svg';

const Integrations = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

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

            <div className="about_content">
                <h2>Integrations</h2>

                <div className="google_card">
                    <div className="google_style">
                        <h4>Google </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="switch_img">
                        <img src={drive_2} alt="drive_2" className="drive_2" />
                        <img src={gmail_2} alt="gmail_2" className="gmail_2" />
                        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                            <div className="toggle"></div>
                        </div>
                    </div>
                </div>

                <div className="google_card">
                    <div className="google_style">
                        <h4>Microsoft </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="switch_img">
                        <img src={drive_2} alt="drive_2" className="drive_2" />
                        <img src={gmail_2} alt="gmail_2" className="gmail_2" />
                        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                            <div className="toggle"></div>
                        </div>
                    </div>
                </div>

                <div className="google_card">
                    <div className="google_style">
                        <h4>Procore </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="switch_img">
                        <img src={drive_2} alt="drive_2" className="drive_2" />
                        <img src={gmail_2} alt="gmail_2" className="gmail_2" />
                        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                            <div className="toggle"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Integrations;
