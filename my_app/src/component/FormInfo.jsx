import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import web3Modal from 'web3modal';
import { ethers, Signer } from 'ethers';
import { StoreData_Contract_Address, abi } from '../constants/index';
import './styleForm.css';
import './styleProfile.css';
import Chat from './ChatBox';

function FormInfo({ formVal, setFormVal, currentAccount }) {
  const [Display, setDisplay] = useState(false);

  const handleFormVal = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    await add_ifno_data();
    navigate('/formmedia');
  };

  const add_ifno_data = async () => {
    try {
      const Instance = await connectingWithSmartContract();
      const Instance2 = await connectWithSmartContract();
      //input data parameters (string memory _password,string memory _first_name,
      // string memory _middle_name,string memory _sur_name,string memory _gender,string memory _date_of_birth, string memory _Address,string memory _email,uint256 _phone_no)

      const transact = await Instance.addInfo(
        formVal?.password,
        formVal?.firstName,
        formVal?.middlename,
        formVal?.surName,
        formVal?.gender,
        formVal?.dateofbirth,
        formVal?.address,
        formVal?.email,
        formVal?.phone
      );
      await transact.wait();

      // let tx = await Instance2.getid();
      // console.log('ab');
      // console.log(tx);
      // console.log('abc');
    } catch (error) {
      console.log('error while upload information');
    }
  };
  const connectWithSmartContract = async () => {
    try {
      const web3modal = new web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const contract = new ethers.Contract(
        StoreData_Contract_Address,
        abi,
        provider
      );
      return contract;
    } catch (error) {
      console.log('something went wrong while connecting with contract ');
    }
  };

  const connectingWithSmartContract = async () => {
    try {
      const web3modal = new web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        StoreData_Contract_Address,
        abi,
        signer
      );
      return contract;
    } catch (error) {
      console.log('something went wrong while connecting with contract ');
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
              backgroundColor: '#001d39',
              color: '#1ddfce',
              padding: '5px 7px',
              margin: '10px',
              borderColor: '#1ddfce',
              borderRadius: '3px',
              cursor: 'pointer',
            }}>
            Connected {currentAccount}
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
      Connect MetaMask Wallet
    </button> */}
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
        <Link to={"/update"}>Update Info</Link>
      </button> */}
      <button
        style={{
          backgroundColor: '#001d39',
          color: '1ddfce',
          padding: '5px 7px',
          borderColor: '1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        Form Info
      </button>

      <button
        style={{
          backgroundColor: '#001d39',
          color: '1ddfce',
          padding: '5px 7px',
          borderColor: '1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        <Link
          to={'/formmedia'}
          style={{ color: '#1ddfce' }}>
          Upload Media
        </Link>
      </button>
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
        <Link to={"/updateformmedia"}>Update Media</Link>
      </button> */}
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
      <button
        style={{
          backgroundColor: '#001d39',
          color: '1ddfce',
          padding: '5px 7px',
          borderColor: '1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        <Link
          to={'/getdata'}
          style={{ color: '#1ddfce' }}>
          Get Data
        </Link>
      </button>

      <button
        style={{
          backgroundColor: '#001d39',
          color: '1ddfce',
          padding: '5px 7px',
          borderColor: '1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        <Link
          to={'/guestrequest'}
          style={{ color: '#1ddfce' }}>
          Put Request
        </Link>
      </button>

      <div className="form">
        <form
          className="section-form"
          onSubmit={formSubmit}>
          <h1 className="heading-form">Form </h1>
          <h3 className="heading-details">Add Your Details</h3>
          <div className="wrapper">
            <input
              value={formVal?.firstName}
              name="firstName"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              First Name
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.middlename}
              name="middlename"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Middle Name
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.surName}
              name="surName"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Sur Name
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.dateofbirth}
              name="dateofbirth"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Date of Birth
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.gender}
              name="gender"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Gender
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.password}
              name="password"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Password
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.email}
              name="email"
              onChange={handleFormVal}
              className="name-input"
              required
              type="email"
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Email
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.phone}
              name="phone"
              onChange={handleFormVal}
              className="name-input"
              type="number"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Phone
            </label>
          </div>
          <div className="wrapper">
            <input
              value={formVal?.address}
              name="address"
              onChange={handleFormVal}
              className="name-input"
              type="text"
              required
              autoComplete="off"
            />
            <label
              className="name-label"
              htmlFor="name">
              Address
            </label>
          </div>
          <button type="submit">Next Page </button> <br />
        </form>
        <button
          onClick={() => {
            setDisplay(true);
          }}
          style={{
            fontSize: '25px',
            padding: '10px 20px',
            position: 'absolute',
            bottom: '10%',
            right: '2%',
          }}>
          Chat With Us
        </button>
        {Display ? <Chat /> : ''}
      </div>
    </>
  );
}

export default FormInfo;
