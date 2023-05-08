import "./styleForm.css";
import "./styleProfile.css";
import { useState } from "react";
import { Link} from "react-router-dom";
import { connectingWithSmartContract } from "./variable";

function Update() {

  const [updateFirstName, setupdateFirstName] = useState("");
  const [updateSecondName, setupdateSecondName] = useState("");
  const [updateSurName, setupdateSurName] = useState("");
  const [updatePassword, setupdatePassword] = useState("");
  const [updateEmail, setupdateEmail] = useState("");
  const [updateAddress, setupdateAddress] = useState("");
//   const [updateTitle, setupdateTitle] = useState("");
  const [updatePhone, setupdatePhone] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setupdateFirstName(e.target.value);
  };
  const handleMiddleName = (e) => {
    e.preventDefault();
    setupdateSecondName(e.target.value);
  };
  const handleSurName = (e) => {
    e.preventDefault();
    setupdateSurName(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setupdatePassword(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setupdateEmail(e.target.value);
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setupdateAddress(e.target.value);
  };
//   const handleTitle = (e) => {
//     e.preventDefault();
//     setupdateTitle(e.target.value);
//   };
  const handlePhone = (e) => {
    e.preventDefault();
    setupdatePhone(e.target.value);
  };
  const handleFirstName = async(e) => {
    e.preventDefault();
    try{
    console.log(updateFirstName);
        const Instance = await connectingWithSmartContract();
        // required parameters (uint8 _id,string memory _new_first_name)
        const transact = await Instance.updateFirstName(localStorage.getItem("userid"),updateFirstName);
    await transact.wait();
    }catch(error){
        alert("error while updating");
  }
    };

    const handlesurName = async(e) => {
        e.preventDefault();
        try{
        console.log(updateFirstName);
            const Instance = await connectingWithSmartContract();
            // required parameters (uint8 _id,string memory _new_SurName)
            const transact = await Instance.updateFirstName(localStorage.getItem("userid"),updateSecondName);
        await transact.wait();
        }catch(error){
            alert("error while updating");
      }
        };

        const handleupdatePassword = async(e) => {
            e.preventDefault();
            try{
            console.log(updateFirstName);
                const Instance = await connectingWithSmartContract();
                // required parameters (uint8 _id,string memory _new_password)
                const transact = await Instance.updatePassword(localStorage.getItem("userid"),updatePassword);
            await transact.wait();
            }catch(error){
                alert("error while updating");
          }
            };

        const handleUpdateEmail = async(e) => {
              e.preventDefault();
              try{
               console.log(updateFirstName);
                    const Instance = await connectingWithSmartContract();
                    // required parameters (uint8 _id,string memory _new_Email)
                    const transact = await Instance.updateEmail(localStorage.getItem("userid"),updateEmail);
            await transact.wait();
            }catch(error){
                    alert("error while updating");
              }
                };

         const handleUpdatePhone = async(e) => {
              e.preventDefault();
              try{
               console.log(updateFirstName);
                    const Instance = await connectingWithSmartContract();
                    // required parameters (uint8 _id,string memory _new_Update_Phone)
                    const transact = await Instance.updatePhone(localStorage.getItem("userid"),updatePhone);
            await transact.wait();
            }catch(error){
                    alert("error while updating");
              }
                };

         const handleUpdateAddress = async(e) => {
               e.preventDefault();
                 try{
                  console.log(updateFirstName);
                    const Instance = await connectingWithSmartContract();
                   // required parameters (uint8 _id,string memory _new_Address)
                    const transact = await Instance.updateAddress(localStorage.getItem("userid"),updateAddress);
                  await transact.wait();
                  }catch(error){
                          alert("error while updating");
                    }
                      };
    // const handleUpdatetitle = async(e) => {
    //     e.preventDefault();
    //     try{
    //      console.log(updateFirstName);
    //        const Instance = await connectingWithSmartContract();
    //         // required parameters (uint8 _id,string memory _new_password)
    //      const transact = await Instance.updateAddress(localStorage.getItem("userid"),updateAddress);
    //     await transact.wait();
    //       }catch(error){
    //        alert("error while updating");
    //         }
    // };
                      
    
  
  console.log(
    updateFirstName,
    updateSecondName,
    updateSurName,
    updatePassword,
    updateEmail,
    updateAddress,
    // updateTitle,
    updatePhone
  );

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
      Connect Wallet  
    </button>

 </ul>
</nav>
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
        <Link to={"/formmedia"}>Upload Media</Link>
      </button> */}
    <button
      style={{
        backgroundColor: "#002d39",
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
          backgroundColor: "#002d39",
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
          backgroundColor: "#002d39",
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
        backgroundColor: "#002d39",
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
    <div style={{ backgroundColor: "#002d39" }}>
        {/* form 1 */}
        <form onSubmit={handleFirstName} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updateFirstName}
              name="firstName"
              onChange={handleForm}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update First Name 
            </label>
          </div>
          <button type="submit">Update</button>

        {/* form 1 */}
        </form>
        <form onSubmit={handleFirstName} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updateSecondName}
              onChange={handleMiddleName}
              name="firstName"
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Middle Name 
            </label>
          </div>
          <button type="submit">Update</button>
        {/* form 2 */}

        </form>
        <form onSubmit={handlesurName} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updateSurName}
              name="firstName"
              onChange={handleSurName}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Sur Name 
            </label>
          </div>
          <button type="submit">Update</button>
        {/* form 3 */}
        </form>
        <form onSubmit={handleupdatePassword} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updatePassword}
              name="firstName"
              onChange={handlePassword}
              className="name-input"
              type="password"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Password 
            </label>
          </div>
          <button type="submit">Update</button>
        {/* form 4 */}
        </form>
        <form onSubmit={handleUpdateEmail} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updateEmail}
              name="firstName"
              onChange={handleEmail}
              className="name-input"
              type="email"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Email 
            </label>
          </div>
          <button type="submit">Update</button>
        </form>
        {/* form 5 */}

        <form onSubmit={handleUpdatePhone} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updatePhone}
              name="firstName"
              onChange={handlePhone}
              className="name-input"
              type="number" />
            <label className="name-label" htmlFor="name">
              Update Phone# 
            </label>
          </div>
          <button type="submit">Update</button>
        </form>
        {/* form 6 */}

        <form onSubmit={handleUpdateAddress} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID 
            </label>
          </div>
          <div className="wrapper">
            <input
              value={updateAddress}
              name="firstName"
              onChange={handleAddress}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Address 
            </label>
          </div>
          <button type="submit">Update</button>
        </form>
        {/* form 7 */}

        {/* <form onSubmit={handleUpdatetitle} action="">
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              UserID *
            </label>
          </div>
          <div className="wrapper">
            <input
              className="name-input"
              type="number" /><label className="name-label" htmlFor="name">
              WorkID *
            </label></div>
          <div className="wrapper">
            <input
              value={updateTitle}
              name="firstName"
              onChange={handleTitle}
              className="name-input"
              type="text"
              required
              autoComplete="off" />
            <label className="name-label" htmlFor="name">
              Update Title *
            </label>
          </div>
          <button type="submit">Update</button>
        </form> */}
      </div></>
  );
}

export default Update;
