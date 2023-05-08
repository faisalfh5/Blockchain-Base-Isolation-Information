import React, { useState } from "react";
import "./modal.css";

function WorkModal({ setIsModelWork, getWorkVal, setGetWorkVal }) {
  const [workVal, setWorkVal] = useState({
    companyName: "",
    startingDate: "",
    completionDate: "",
    id: "",
  });
  var today = new Date().toISOString().split("T")[0];

  const handForm = (e) => {
    const { name, value } = e.target;
    setWorkVal({ ...workVal, [name]: value });
  };
  const toAddWorklist = () => {
    let list = [...getWorkVal];
    list.push(workVal);
    setGetWorkVal(list);
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setIsModelWork(false);
          toAddWorklist();
        }}
      >
        <div className="educationModal">
          <button
            className="buttonModalClose"
            onClick={() => setIsModelWork(false)}
          >
            close
          </button>
          <h2>Add Your Work History</h2>

          <div>
            <div className="wrapper">
              <input
                name="companyName"
                value={workVal.companyName}
                onChange={handForm}
                className="input-modal"
                type="text"
                required
                autoComplete="off"
              />
              <label className="modalLabel">Company Name </label>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <input
                name="startingDate"
                value={workVal.startingDate}
                onChange={handForm}
                className="input-modal"
                type="date"
                required
                autoComplete="off"
                max={today}
              />
              <label className="modalLabel">Starting Date </label>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <input
                name="completionDate"
                value={workVal.completionDate}
                onChange={handForm}
                className="input-modal"
                type="date"
                required
                autoComplete="off"
              />
              <label className="modalLabel">Ending Date</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default WorkModal;
