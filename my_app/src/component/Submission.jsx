import React from "react";
import { Link} from "react-router-dom";

function Submission() {
  <>
   
  <button
    style={{
      backgroundColor: "#001d39",
      color: "#ffc300",
      padding: "5px 7px",
      borderColor: "#ffc300",
      borderRadius: "3px",
      cursor: "pointer",
    }}
  >
    Connect MetaMask
  </button>
  <button
      style={{
        backgroundColor: "#001d39",
        color: "#ffc300",
        padding: "5px 7px",
        borderColor: "#ffc300",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
        <Link to={"/update"}>Update Info</Link>
      </button>
      <button
      style={{
        backgroundColor: "#001d39",
        color: "#ffc300",
        padding: "5px 7px",
        borderColor: "#ffc300",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
        <Link to={"/formmedia"}>Upload Media</Link>
      </button>
      <button
      style={{
        backgroundColor: "#001d39",
        color: "#ffc300",
        padding: "5px 7px",
        borderColor: "#ffc300",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
        <Link to={"/updateformmedia"}>Update Media</Link>
      </button>
      <button
        style={{
          backgroundColor: "#001d39",
          color: "#ffc300",
          padding: "5px 7px",
          borderColor: "#ffc300",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        <Link to={"/addcollaborator"}>Add Collaborator</Link>
      </button>
      <button
        style={{
          backgroundColor: "#001d39",
          color: "#ffc300",
          padding: "5px 7px",
          borderColor: "#ffc300",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        <Link to={"/removecollaborator"}>Remove Collaborator</Link>
      </button>
      <button
      style={{
        backgroundColor: "#001d39",
        color: "#ffc300",
        padding: "5px 7px",
        borderColor: "#ffc300",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
        <Link to={"/getdata"}>Get Data</Link>
      </button>
        </>
  return (
    <>
    <nav className="navbar">
 <div className="navbar-logo">
   <a href="#">Immutable Collaboration</a>
 </div>
 
 <ul className="navbar-menu">
 <button
      style={{
        backgroundColor: "#002d39",
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
    <div
      style={{
        background: "#021f27",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#1ddfce" }}>Thanks for Submission</h2>

    </div>
    </>
  );
}

export default Submission;
