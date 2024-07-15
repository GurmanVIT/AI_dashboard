import React, { useState } from "react";

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
    <div className="App">
      <h1>Form with 7 Input Fields</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Field 1:
            <input
              type="text"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 2:
            <input
              type="text"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 3:
            <input
              type="text"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 4:
            <input
              type="text"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 5:
            <input
              type="text"
              name="field5"
              value={formData.field5}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 6:
            <input
              type="text"
              name="field6"
              value={formData.field6}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Field 7:
            <input
              type="text"
              name="field7"
              value={formData.field7}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProject;
