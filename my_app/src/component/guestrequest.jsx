import { useState } from "react";
import { connectingWithSmartContract } from "./guestresult"

function GuestRequest() {
 
    // const [ data ,setdata] = useState();
//   const handleFormVal = (e) => {
//     const { name, value } = e.target;
//     setFormVal({ ...formVal, [name]: value });
//   };
const [userdata , setUserData] = useState({
  userId: "",
  workId: "",
});

const handlechange = (e) => {
  const { name, value } = e.target;
  setUserData({ ...userdata, [name]: value });
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    PutRequest(); 
  console.log("a");
  console.log("Transaction on blockcahin has been successfully uploaded")

  }

  const  PutRequest = async () => {
        try {
          const instance = await connectingWithSmartContract();
          const transact = await instance.requestMainUser();
          console.log(transact);
          alert("You request has been sent to admin for approval");
        }catch(error){
          alert("error while making request");
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
      {/* <button
    // onClick={handleRender1}
      style={{
        backgroundColor: "transparent",
        color: "#ffc300",
        padding: "5px 7px",
        borderColor: "#ffc300",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >   <Link to={"/forFrominfo"} > From Info </Link>
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
        Upload Media
      </button> */}

      
     <h2
          style={{
            color: "#1ddfce",
            fontSize: "40px",
          }}
        >
          Put Request for Main User
        </h2>
     <form  action="">
     <div className="wrapper">
            <input
            value={userdata?.userId}
            name="userId"
             onChange={handlechange}
             className="name-input"
              /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>

          <div className="wrapper">
            <input
            value={userdata?.workId}
            name="workId"
            onChange={handlechange}
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              WorkID 
            </label>
            
          </div>
          {/* <div className="wrapper">
            <input
              name="firstName"
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Wallet Address *
            </label>
          </div> */}

          <button onClick={handleSubmit}> Request </button>
        </form>
      
</>
  );
}

export default GuestRequest;
