import { Link , useNavigate} from "react-router-dom";
import "./styleForm.css";
import "./styleProfile.css";
// import Firstpage from "./firstpage"
import Chat from "./ChatBox"
import { useState } from "react";


function User({currentAccount}) {
    // const nav = useNavigate();
    // const [currentAccount, setcurrentAccount] = useState(Firstpage?.currentAccount);
  // const [walletConnected, setWalletConnected] = useState(false);
//   const web3ModalRef = useRef();


// const connectWallet = async () =>{
//   try{
//       if (!window.ethereum) return console.log("install metamask ");
//       const accounts = await window.ethereum.request({
//           method:"eth_requestAccounts",
//       });
//       setcurrentAccount(accounts[0])
//   }catch (error){
//       console.log("error while connecting to the wallet")
//   }
//   }

  

//   useEffect(() => {
    
//     if (!walletConnected) {
     
//       web3ModalRef.current = new Web3Modal({
//         network: "goerli",
//         providerOptions: {},
//         disableInjectedProvider: false,
//       });
//       connectWallet();
//     }
//   }, []);

  const [formVal, setFormVal] = useState({
    userid: "",
   
  });
const [Display,setDisplay]=useState(false)


  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    if(formVal?.userid === "1")
    {
      navigate("/update");  
    }
    else if (formVal?.userid === "2"){
      navigate("/update"); 
    }
    else if (formVal?.userid === "3"){
      navigate("/update"); 
    }
    else{ alert("You are not a main user")}
    

    
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
        margin: "20px"
       
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
      
        <Link to={"/forFrominfo"} style={{color: "#1ddfce"}}> Guest User </Link>
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
        
        User

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
        
        <Link to={"/adminpanel"}style={{color: "#1ddfce"}}>Admin</Link>

      </button>
 
      
      <div className="form">
        <form className="section-form" onSubmit={formSubmit}>
          <h1 className="heading-form"> User Valdation </h1>
          <div className="wrapper">
            <input
              value={formVal?.userid}
              name="userid"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" >
              Enter User ID *
            </label>
          </div>
          
          <button type="submit">Check</button> <br />
        </form>
        <button onClick={()=>{setDisplay(true)}}  style={{fontSize:"25px",padding:"10px 20px",position:"absolute" ,bottom:"10%",right:"2%"}}>Chat With Us</button>
      {Display?  <Chat/>:""}
      </div></>
  );
}

export default User;
