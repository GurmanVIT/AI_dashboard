import React, { useState } from 'react';
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import send_icon from '../../assets/img/send_icon.svg';
import add_circle from '../../assets/img/add_circle.svg';
import ai_icon_new from '../../assets/img/ai_icon_new.svg';
import copy_icon from '../../assets/img/copy_icon.svg';

function YourAi() {

    return (
        <div className="sidebar_mar">
            <div className="header">
                <div className="user-info">
                    <img src={notification} alt='notification' className="notification-icon" />
                    <img src={user_icon} alt='user_icon' className="user-icon" />
                    <span className="username">username@gmail.com</span>
                    <img src={down_icon} alt='down_icon' className="dropdown-arrow" />
                </div>
                <h2>Your Al</h2>
            </div>
            <div className="sidebar_det">
                <button className="active_button">Active</button>
                <select className="project-select">
                    <option value="">Select Project</option>
                </select>
            </div>
            <div className="content">
                <div className="conversation">
                    <div className="message" >
                        <div className="message_content">
                            <div className='user_chat'>
                                <p>What time is it in Milan?</p>
                            </div>
                            <span>3 days ago</span>
                        </div>
                        <div className="message-meta">
                            <img src={ai_icon_new} alt='ai_icon_new' className="ai_icon_new" />
                            <span className="ai_contents">Milan is in the Central European Time (CET) zone, which is UTC+1. However, during daylight saving time (from the last Sunday in March to the last Sunday in October), Milan follows Central European Summer Time (CEST), which is UTC+2.</span>
                            <div className='day_img'>
                                <p>3 days ago</p>
                                <img src={copy_icon} alt='copy_icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-area">
                    <img src={add_circle} alt='add_circle' className='add_circle' />
                    <input
                        type="text"
                        placeholder="Message for Your Al"
                    />
                    <img src={send_icon} alt='send_icon' className='send_icon' />
                </div>
            </div>
        </div>
    );
}

export default YourAi;