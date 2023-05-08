import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connectingWithSmartContract } from "./variable";
import { uploadFileToIPFS } from "../pinata";


function UpdateFormMedia(setResultUrl) {
  const [workid, setWorkId] = useState(parseInt(localStorage.getItem('userid')) || 1);
  const [formVal, setFormVal] = useState({
    userid: "",
    workid: "",
    title: "",
    data: "",
  });
  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };
  async function OnChangeFile(e) {
    var file = e.target.files[0];
    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if(response.success === true) {
          console.log("Uploaded image to Pinata: ", response.pinataURL);
          const url = response.pinataURL;
          setFormVal({
            ...formVal,
            data: url,
          })
          setResultUrl(url);
          setWorkId(workid + 1);
          localStorage.setItem('workid', workid + 1);
          alert("Your work id = " + workid);
      }
  }
  catch(e) {
      alert("Error during file upload", e);
  }
    setFormVal({
      ...formVal,
      data: file,
    })
  }
  const navigate = useNavigate();
  const formSub = (e) => {
    console.log("submitted");
    e.preventDefault();
    UpdateData();
    navigate("/formsubmission");
    
  };

  const UpdateData = async() => {
    try{const Instance = await connectingWithSmartContract();
    // required parameters uint8 _workid,uint8 _userid,string memory _title,string memory _data
    const transact = await Instance.updateInputData(formVal?.workid,localStorage.formVal?.userid, formVal?.title, formVal?.data);
    await transact.wait();}
    catch(error){
      alert("error while update your data")
    }

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
        <Link to={"/updateformmedia"}style={{color: "#1ddfce"}}>Update Data</Link>
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
        <Link to={"/addcollaborator"}style={{color: "#1ddfce"}}>Add Collaborator</Link>
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
    <form style={{ background: "#021f27", height: "100vh" }} onSubmit={formSub}>
        <h2
          style={{
            color: "#1ddfce",
            fontSize: "40px",
          }}
        >
          Update Media
        </h2>
        <div className="wrapper">
          <input
          value={formVal?.userid}
          name="userid"
          onChange={handleFormVal}
            className="name-input"
            type="number" />
          <label className="name-label" htmlFor="name">
            User_ID 
          </label>
        </div>
        <div className="wrapper">
          <input
          value={formVal?.workid}
          name="workid"
          onChange={handleFormVal}
            className="name-input"
            type="number" />
          <label className="name-label" htmlFor="name">
            Work_ID 
          </label>
        </div>
        <div className="wrapper">
          <input
            value={formVal?.title}
            name="title"
            onChange={handleFormVal}
            className="name-input"
            type="text"
            required
            autoComplete="off" />
          <label className="name-label" htmlFor="name">
            Title 
          </label>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type={"file"} onChange={OnChangeFile}/>
          <h3
            style={{
              color: "#1ddfce",
              marginTop: "10px",
              fontSize: "25px",
            }}
          >
            Update Media Here
          </h3>
        </div>
        <button
          type="submit"
          style={{
            margin: "45px 0px",
            backgroundColor: "transparent",
            color: "#1ddfce",
            padding: "5px 7px",
            borderColor: "#1ddfce",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form></>
  );
}

export default UpdateFormMedia;
