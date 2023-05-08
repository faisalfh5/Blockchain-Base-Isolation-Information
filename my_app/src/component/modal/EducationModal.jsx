import React, { useState } from "react";
import "./modal.css";

const EducationModal = ({ setIsModel, setEducationVal, educationVal }) => {
  const [formVal, setFormVal] = useState({
    degreeTitle: "",
    cGPA: "",
    completionDate: "",
    id: "",
  });
  var today = new Date().toISOString().split("T")[0];

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };
  const addToEducationList = () => {
    const list = [...educationVal];
    list.push(formVal);
    setEducationVal(list);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setIsModel(false);
          addToEducationList();
        }}
      >
        <div className="educationModal">
          <button
            onClick={() => {
              setIsModel(false);
            }}
            className="buttonModalClose"
          >
            close
          </button>
          <h2>Education Details</h2>
          <div className="wrapper">
            <input
              name="degreeTitle"
              className="input-modal"
              type="text"
              required
              autoComplete="off"
              onChange={handleForm}
              value={formVal?.degreeTitle}
            />
            <label className="modalLabel">Degree Title </label>
          </div>
          <div className="wrapper">
            <input
              name="cGPA"
              className="input-modal"
              type="number"
              required
              autoComplete="off"
              onChange={handleForm}
              value={formVal?.cGPA}
            />
            <label className="modalLabel">CGPA </label>
          </div>
          <div className="wrapper">
            <input
              name="completionDate"
              className="input-modal"
              type="date"
              required
              autoComplete="off"
              value={formVal?.completionDate}
              min={today}
              onChange={handleForm}
            />
            <label className="modalLabel">Completion Date </label>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default EducationModal;
