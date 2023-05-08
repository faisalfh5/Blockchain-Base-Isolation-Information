import { Link } from "react-router-dom";
// import { useState } from "react";
import web3Modal from 'web3modal';
import { ethers } from "ethers";
import {StoreData_Contract_Address, abi } from '../constants/index';
import { uploadFileToIPFS } from "../pinata";

function FormMedia({formVal, setFormVal, setResultUrl, currentAccount}) {
  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadData(); 
  console.log("a");
  console.log("Transaction on blockcahin has been successfully uploaded")
  }

  async function OnChangeFile(e) {
    var file = e.target.files[0];
    //check for file extension
    try {
        //upload the file to IPFS
        const response = await uploadFileToIPFS(file);
        if(response.success === true) {
            console.log("Uploaded image to Pinata: ", response.pinataURL);
            const url = response.pinataURL;
            setFormVal({
              ...formVal,
              fileUrl: url,
            })
            setResultUrl(url);
        }
    }
    catch(e) {
        alert("Error during file upload", e);
    }
  }
  
  // const formSub = (e) => {
    // const navigate = useNavigate();
  //   console.log("submitted");
  //   e.preventDefault();
  //   navigate("/formsubmission");

  // };

  const uploadData = async () => {

    try{
    
    const Instance = await connectingWithSmartContract();
    //input data parameters uint8 _userid , string memory _title, string memory _data
    const transact = await Instance.inputData(formVal?.userid , formVal?.title, formVal?.fileUrl);
    await transact.wait();
    }catch(error){
      alert("error while uploading data on blockchain")
    }
    
  };
  
  const connectingWithSmartContract = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
       const contract = new ethers.Contract(StoreData_Contract_Address, abi ,signer);
       return contract;

    } catch(error){
        console.log ("something went wrong while connecting with contract ")
    };
}


  return (
    
    <>
    {/* <button
      style={{
        backgroundColor: "transparent",
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
        backgroundColor: "transparent",
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
          backgroundColor: "transparent",
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
          backgroundColor: "transparent",
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
          backgroundColor: "transparent",
          color: "#ffc300",
          padding: "5px 7px",
          borderColor: "#ffc300",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        <Link to={"/removecollaborator"}>Remove Collaborator</Link>
      </button> */}
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
      Connected {currentAccount}
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
      <Link to={"/firstpage "}style={{color: "#1ddfce"}}> Home </Link>
    </button>
    
      <button
    // onClick={handleRender1}
      style={{
        backgroundColor: "#001d39",
        color: "#1ddfce",
        padding: "5px 7px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >   <Link to={"/forFrominfo"}style={{color: "#1ddfce"}} > From Info </Link>
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
        Upload Media
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
        <Link to={"/guestrequest"}style={{color: "#1ddfce"}}>Put Request</Link>
      </button>
      
    <form style={{ background: "#062831", height: "100vh" }} 
    // onSubmit={formSub}
    >
        <h2
          style={{
            color: "#1ddfce",
            fontSize: "40px",
          }}
        >
          Upload Media
        </h2>

        <div className="wrapper">
          <input
            value={formVal?.userid}
            name="userid"
            onChange={handleFormVal}
            className="name-input"
            type="text"
            required
            autoComplete="off" />
          <label className="name-label" htmlFor="name">
            User ID
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

          <h3
            style={{
              color: "#1ddfce",
              marginTop: "10px",
              fontSize: "25px",
            }}
          >
            Upload Media Here
          </h3>
        </div>

        <div
        style={{
          margin: "20px",
        }}>
                    
         <input type={"file"} onChange={OnChangeFile}></input>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
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

export default FormMedia;
