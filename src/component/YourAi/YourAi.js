import React, { useEffect, useState } from "react";
import notification from "../../assets/img/notification.svg";
import user_icon from "../../assets/img/user_icon.svg";
import down_icon from "../../assets/img/down_icon.svg";
import send_icon from "../../assets/img/send_icon.svg";
import add_circle from "../../assets/img/add_circle.svg";
import ai_icon_new from "../../assets/img/ai_icon_new.svg";
import copy_icon from "../../assets/img/copy_icon.svg";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChatHistory } from "../../redux/GetChatHistorySlice";

function YourAi() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = location.state;
  const [chatData, setChatData] = useState([]);

  const chatResponse = useSelector((state) => state.chatHistoryReducer.data);

  useEffect(() => {
    const payload = {
      id: id,
    };
    dispatch(getChatHistory(payload));
  }, [id]);

  useEffect(() => {
    console.log("History Data ===> ", chatResponse);
    if (chatResponse != null && chatResponse.status == 1) {
      setChatData(chatResponse.data);
    }
  }, [chatResponse]);

  useEffect(() => {
    console.log("Chat Data =====>", chatData);
  }, [chatData]);

  return (
    <div className="sidebar_mar">
      <div className="header">
        <div className="user-info">
          <img
            src={notification}
            alt="notification"
            className="notification-icon"
          />
          <img src={user_icon} alt="user_icon" className="user-icon" />
          <span className="username">username@gmail.com</span>
          <img src={down_icon} alt="down_icon" className="dropdown-arrow" />
        </div>
        <h2>Your Al</h2>
      </div>
      <div className="sidebar_det">
        <button className="active_button">Active</button>
        <select className="project-select">
          <option value="">Select Project</option>
        </select>
      </div>

      {chatData.length > 0 &&
        chatData.map((message) => (
          <div className="content">
            <div className="conversation">
              <div className="message">
                <div className="message_content">
                  <div className="user_chat">
                    <p>{message.request}</p>
                  </div>
                  {/* <span>3 days ago</span> */}
                </div>
                <div className="message-meta">
                  <img
                    src={ai_icon_new}
                    alt="ai_icon_new"
                    className="ai_icon_new"
                  />
                  <span className="ai_contents">{message.response}</span>
                  <div className="day_img">
                    {/* <p>3 days ago</p> */}
                    <img src={copy_icon} alt="copy_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="input-area">
        <img src={add_circle} alt="add_circle" className="add_circle" />
        <input type="text" placeholder="Message for Your Al" />
        <img src={send_icon} alt="send_icon" className="send_icon" />
      </div>
    </div>
  );
}

export default YourAi;
