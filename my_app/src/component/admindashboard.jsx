
import "./styleForm.css";
import "./styleProfile.css";



  

function AdminAdd() {
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
        borderColor: "#1ddfce",
        borderRadius: "3px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
      Connected 
    </button>
 </ul>
 
</nav>

    <button style={{display: "inline-flex",  margin: "12px 0 0 5px" }}>Remove Main User</button>
    <input type="text" style={{display: "inline-flex",  margin: "12px 0 0 4px" ,height: "25px", width: "325px" }} />
    <button style={{display: "inline-flex", margin: "12px 0 0 20px"}}>Approve</button>
    <input type="text" style={{display: "inline-flex",  margin: "12px 0 0 4px" ,height: "25px", width: "325px" }} />
    <button style={{display: "inline-flex", margin: "12px 0 0 20px" }}>Reject</button>
    <input type="text" style={{display: "inline-flex",  margin: "12px 0 0 4px" ,height: "25px", width: "325px" }} />
    <div>
    <button style={{display: "inline-flex", margin: "12px 20px 0 10px"}}>Get all main users</button>
    <button style={{display: "inline-flex", margin: "30px 44px 0 600px" }}>Get Request</button>
    </div>
    <div className="add" style={{width: "600px",height: "450px", backgroundColor: "white",margin: "20px 20px 0 50px"}}>
    </div>

    <div  style={{width: "600px",height: "450px", backgroundColor: "white",margin: "-450px 20px 0 730px"}}>
    </div>
    
    </>
    );
}

export default AdminAdd;