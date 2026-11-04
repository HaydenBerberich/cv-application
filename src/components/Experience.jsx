import { useState } from "react";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    company: "",
    title: "",
    description: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      <h2>Experience</h2>
      {isEditing ? (
        <div className="inputs">
          <label>
            Job Title:
            <input
              type="text"
              name="title"
              value={info.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="company"
              value={info.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={info.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="start"
              value={info.start}
              onChange={handleChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="end"
              value={info.end}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </div>
      ) : (
        <div className="content">
          <h3>{info.company}</h3>
          <h3>{info.title}</h3>
          <h3>{info.description}</h3>
          <h3>
            {info.start} to {info.end}
          </h3>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  );
}
