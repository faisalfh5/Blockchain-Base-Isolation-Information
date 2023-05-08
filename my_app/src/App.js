import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import FormInfo from "./component/FormInfo";
import FormMedia from "./component/FormMedia";
import Submission from "./component/Submission";
import Update from "./component/Update";
import UpdateFormMedia from "./component/UpdateFormMedia";
import GetData from "./component/Result";
import AddCollaborator from "./component/addcollaborator";
import RemoveCollaborator from "./component/removecollaborator";
import Admin from "./component/admin";
import AdminAdd from "./component/adminAdd";
import Firstpage from "./component/firstpage";
import User from "./component/user";
import Loginpage from "./component/loginpage";
import AdminDash from "./component/admindashboard";
import GuestRequest from "./component/guestrequest";
import UserDash from "./component/userdash";


function App() {
  const [currentAccount, setcurrentAccount] = useState("");
  
  const [formVal, setFormVal] = useState({
    userid: "",
    firstName: "",
    middlename: "",
    surName: "",
    dateofbirth: "",
    gender: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    fileUrl: "",
  });

  const [resulturl, setResultUrl] = useState("");

  return (
    <div className="App">
      <Routes>
      <Route index element={<Loginpage setcurrentAccount={setcurrentAccount} currentAccount = {currentAccount} />}></Route>

        <Route path="firstpage" element={<Firstpage currentAccount = {currentAccount} />}></Route>

        <Route path="forFrominfo" element={<FormInfo formVal={formVal} setFormVal= {setFormVal} currentAccount = {currentAccount}   />}></Route>

        <Route path="formmedia" element={<FormMedia setResultUrl={setResultUrl} formVal={formVal} setFormVal= {setFormVal} currentAccount = {currentAccount} />}> </Route>

        <Route path="formsubmission" element={<Submission />}></Route>
        <Route path="update" element={<Update />}></Route>
        <Route path="updateformmedia" element={<UpdateFormMedia setResultUrl={setResultUrl} />}> </Route>
        <Route path="getdata" element={<GetData resulturl= {resulturl} />}></Route>
        <Route path="addcollaborator" element={<AddCollaborator />}></Route>
        <Route path="removecollaborator" element={<RemoveCollaborator />}></Route>
        <Route path="adminpanel" element={<Admin currentAccount = {currentAccount} />}></Route>
        <Route path="admindashboard" element={<AdminAdd />}></Route>
        <Route path="user" element={<User currentAccount = {currentAccount} />}></Route>
        <Route path="admindash" element={<AdminDash />}></Route>
        <Route path="guestrequest" element={<GuestRequest />}></Route>
        <Route path="userdash" element={<UserDash />}></Route>

        

      </Routes>
      {/* <FormInfo /> */}
      {/* <Portfolio/> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
