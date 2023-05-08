import { Link , useNavigate } from "react-router-dom";
import "./styleForm.css";
import "./styleProfile.css";
// import Firstpage from "./firstpage"
import Chat from "./ChatBox"
import { useState } from "react";
import { connectingWithSmartContract } from "./variable";

  

function Admin({currentAccount}) {
    
  const navigate = useNavigate();

  const [formVal, setFormVal] = useState({
    address: "",
  });
const [Display,setDisplay]=useState(false)


  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    validation();

  }

  const validation = async () => {
    try{
    const instance = await connectingWithSmartContract();
    const transact = await instance.getadminaddress();
    console.log(transact);
    if(formVal?.address === transact){
      navigate("/admindashboard")
    }
    else {
      alert("you are not an admin")
    }
  }catch(error){
      alert("error while fetching admin address")
    }
  }
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
      Connected {currentAccount}
    </button>

 </ul>
</nav>
  
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
    >
      
        <Link to={"/forFrominfo"} style={{color: "#1ddfce"}}> Gesut User </Link>
      </button>
      <button
      // onClick={handleRender}
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
        
        <Link to={"/user"}style={{color: "#1ddfce"}}>User</Link>

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
        Admin
        {/* <Link to={"/adminpanel"}>Admin</Link> */}

      </button>
      <div className="form">
        <form className="section-form" onSubmit={formSubmit}>
          <h1 className="heading-form"> Admin Validation </h1>
          <div className="wrapper">
            <input
              value={formVal?.address}
              name="address"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" >
              Enter Wallet Address 
            </label>
          </div>
          
          <button type="submit" >Check</button> <br />
        </form>
        <button onClick={()=>{setDisplay(true)}}  style={{fontSize:"25px",padding:"10px 20px",position:"absolute" ,bottom:"10%",right:"2%"}}>Chat With Us</button>
      {Display?  <Chat/>:""}
      </div></>
  );
}

export default Admin;
