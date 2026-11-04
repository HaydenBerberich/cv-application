import { useState } from "react";

export default function General() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      {isEditing ? (
        <>
          <h2>General Information</h2>
          <div className="inputs">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={info.phone}
                onChange={handleChange}
              />
            </label>
            <button onClick={() => setIsEditing(false)}>Submit</button>
          </div>
        </>
      ) : (
        <div className="content">
          <h3>{info.name}</h3>
          <h4>{info.email}</h4>
          <h4>{info.phone}</h4>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  );
}
