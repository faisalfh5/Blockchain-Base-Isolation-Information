import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styleForm.css";
import "./styleProfile.css";


function RemoveCollaborator() {
  const [formVal, setFormVal] = useState({
    address_collaborator: "",
  });

  const navigate = useNavigate();

  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Add Collaborator", formVal.address_collaborator);
    navigate("/formedia");
  };

  return (
    <>
    
    <nav className="navbar">
 <div className="navbar-logo">
   <a href="#">Immutable Collaboration</a>
 </div>
 
 <ul className="navbar-menu">
 <button
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        margin: "10px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
       
      }}
    >
      Connect Wallet  
    </button>

 </ul>
</nav>
<button
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
      Connect MetaMask
    </button>
    <button
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
        <Link to={"/update"}style={{color: "#1ddfce"}}>Update Info</Link>
      </button>
      <button
        style={{
          backgroundColor: "#001d39",
          color: "#1ddfce",
          padding: "5px 7px",
          borderColor: "#1ddfce",
          borderRadius: "3px",
          cursor: "pointer",
          margin: "20px"
        }}
      >
        <Link to={"/updateformmedia"}style={{color: "#1ddfce"}}>Update Media</Link>
      </button>
      <button
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
        <Link to={"/formmedia"}style={{color: "#1ddfce"}}>Upload Media</Link>
      </button>
      <button
        style={{
          backgroundColor: "#001d39",
          color: "#1ddfce",
          padding: "5px 7px",
          borderColor: "#1ddfce",
          borderRadius: "3px",
          cursor: "pointer",
          margin: "20px"
        }}
      >
        <Link to={"/removecollaborator"}style={{color: "#1ddfce"}}>Remove Collaborator</Link>
      </button>
      <button
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
        <Link to={"/getdata"}style={{color: "#1ddfce"}}>Get Data</Link>
      </button>
      <div className="form">
        <form className="section-form" onSubmit={formSubmit}>
          <h3 className="heading-details">Add Collaborator</h3>
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              WorkID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.address_collaborator}
              name="address_collaborator"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Collaborator Address 
            </label>
          </div>
          <button type="submit">Remove Collaborator</button>
          </form>
      </div></>
  );
}

export default RemoveCollaborator;
