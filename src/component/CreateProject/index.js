import React, { useState } from "react";
import notification from '../../assets/img/notification.svg';
import user_icon from '../../assets/img/user_icon.svg';
import down_icon from '../../assets/img/down_icon.svg';
import { Button } from "react-bootstrap";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <form onSubmit={handleSubmit}>

        <div className="add_project_style">
          <h2>Add Projects</h2>
          <p>General Information</p>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>
              Company Name
            </label>

            <select className="project-select">
              <option value="">Company Name</option>
            </select>
          </div>

          <div className="label_input_flex">
            <label>
              Project Name
            </label>
            <input
              type="text"
              placeholder="Project Name"
              value={formData.field2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>
              Country
            </label>
            <select className="project-select">
              <option value="">Country</option>
            </select>
          </div>

          <div className="label_input_flex">
            <label>
              City
            </label>
            <input
              type="text"
              placeholder="City"
              value={formData.field4}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="two_input_flex">
          <div className="label_input_flex">
            <label>
              State
            </label>
            <select className="project-select">
              <option value="">State</option>
            </select>
          </div>

          <div className="label_input_flex">
            <label>
              Street Address
            </label>
            <input
              type="text"
              placeholder="Street Address"
              value={formData.field6}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="zip_flex">
          <label>
            Zip
          </label>
          <input
            type="text"
            placeholder="Zip"
            value={formData.field7}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="folder_content">
        <h4>Project folder associations</h4>
        <p>Select which project folders data is pulled from for each service you are<span> integrated</span> with.</p>
      </div>

      <div className="cancel_create_btn">
        <Button className="cancel_btn">Cancel</Button>
        <Button className="create_btn">Create Project</Button>
      </div>
    </div>
  );
};

export default CreateProject;
