import React, { useState } from 'react';

function YourAi() {

    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, { role: 'user', content: message }]);
    };

    return (
        <div className="app">
            <div className="header">
                <h1>Your Al</h1>
                <div className="user-info">
                    <span className="notification-icon"></span>
                    <span className="user-icon"></span>
                    <span className="username">username@gmail.com</span>
                    <span className="dropdown-arrow"></span>
                </div>
            </div>
            <div className="content">
                <div className="sidebar">
                    <button className="active-button">Active</button>
                    <select className="project-select">
                        <option value="">Select Project</option>
                        {/* Add your project options here */}
                    </select>
                </div>
                <div className="conversation">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.role}`}>
                            <div className={`message-content ${message.role === 'ai' ? 'ai-message' : ''}`}>
                                {message.content}
                            </div>
                            <div className="message-meta">
                                {message.role === 'ai' && (
                                    <span className="ai-icon"></span>
                                )}
                                <span className="time">{message.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        placeholder="Message for Your Al"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <button onClick={() => handleSendMessage(document.querySelector('input').value)}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default YourAi;