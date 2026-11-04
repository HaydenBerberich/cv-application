import { useState } from "react";

export default function Eduction() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: "", study: "", start: "", end: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      <h2>Education</h2>
      {isEditing ? (
        <div className="inputs">
          <label>
            School Name:
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              name="study"
              value={info.study}
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
          <h3>{info.name}</h3>
          <h3>{info.study}</h3>
          <h3>
            {info.start} to {info.end}
          </h3>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  );
}
