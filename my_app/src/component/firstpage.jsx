import { Link  } from "react-router-dom";
import "./styleForm.css";
import "./styleProfile.css";
import Chat from "./ChatBox"
import { useState } from "react";


function Firstpage({currentAccount}) {
    // const nav = useNavigate();
    // const [currentAccount, setcurrentAccount] = useState('false');

    const [Display,setDisplay]=useState();
  


  const handleRender1 = () => {
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!currentAccount){

  // connectWallet();
  
    }   
    else {
        console.log("your meta mask wallet connected----->", currentAccount)
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
        onClick={handleSubmit}
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
      Connected { currentAccount}
    </button>
 </ul>
 
</nav>


    
    <button
    onClick={handleRender1}
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
        <Link to={"/forFrominfo"} style={{color: "#1ddfce"}}> Guest User </Link>
      </button>
      <button 
    //   onClick={handleRender2}
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
        {/* <div >User</div> */}
        <Link to={"/user"} style={{color: "#1ddfce"}}>User</Link>

      </button>
      <button 
    //   onClick={handleRender3}
      
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
        
        <Link to={"/adminpanel"}style={{color: "#1ddfce"}}>Admin</Link>
    
      </button>



       
        

        <div class="sign">
      <span class="fast-flicker">Immu</span>table&nbsp;<span class="flicker">Collaboration</span>
    </div>
        

    <button onClick={()=>{setDisplay(true)}}  style={{fontSize:"25px",padding:"10px 20px",position:"absolute" ,bottom:"10%",right:"2%"}}>Chat With Us</button>
      {Display?  <Chat/>:""}
      </>
  );
}

export default Firstpage;
