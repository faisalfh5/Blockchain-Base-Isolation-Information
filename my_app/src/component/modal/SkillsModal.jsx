import React, { useState } from "react";
import "./modal.css";

function SkillsModal({ setIsModalSkills, getSkillVal, setGetSkillVal }) {
  const [formVal, setFormVal] = useState("");

  const addToSkills = () => {
    let list = [...getSkillVal];
    list.push(formVal);
    setGetSkillVal(list);
  };
  const addSkillOnSubmit = (e) => {
    e.preventDefault();
    addToSkills();
    setIsModalSkills(false);
  };
  return (
    <>
      <form action="" onSubmit={addSkillOnSubmit}>
        <div className="skillsModal">
          <button
            className="buttonModalClose"
            onClick={() => {
              setIsModalSkills(false);
            }}
          >
            close
          </button>
          <h2>Add Skills</h2>
          <div>
            <div className="wrapper">
              <input
                value={formVal}
                className="input-modal"
                type="text"
                required
                autoComplete="off"
                onChange={(e) => {
                  setFormVal(e.target.value);
                }}
              />
              <label className="modalLabel">Skills </label>
            </div>
          </div>
          <button type="submit">Add Skills</button>
        </div>
      </form>
    </>
  );
}

export default SkillsModal;
