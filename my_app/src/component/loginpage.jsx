import { useNavigate } from "react-router-dom";
import "./styleForm.css";
import "./styleProfile.css";

import Chat from "./ChatBox"
import { useState } from "react";




function Loginpage ({setcurrentAccount,currentAccount}) {
    const nav = useNavigate();
    const [account, setAccount] = useState('true');
    
    const [Display,setDisplay]=useState();
  


  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log('install metamask ');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setcurrentAccount(accounts[0]);
      setAccount("true");
      
    } catch (error) {
      console.log('error while connecting to the wallet');
    }
    return "true";
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    connectWallet();
    if(account === "true"){
      nav("./firstpage");
      
    }
  };


// useEffect(() => {
//     connectWallet();
//   }, []);

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
        margin: "10px",
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
      Connect Wallet {currentAccount} 
    </button>

 </ul>

</nav>
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">Welcome to Immutable Collaboration</h3>
    </div>
  </div>
</div>

        <h1 style={{color: "#1ddfce", margin: "-600px",marginLeft: "-1350px"}}> Welcome to Immutable Collaboration</h1>
      
       
    
        <button onClick={()=>{setDisplay(true)}}  style={{fontSize:"25px",padding:"10px 20px",position:"absolute" ,bottom:"10%",right:"2%"}}>Chat With Us</button>
      {Display?  <Chat/>:""}
      </>
  );
}

export default Loginpage;
