import './styleForm.css';
import './styleProfile.css';
import { Link } from 'react-router-dom';
import web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { StoreData_Contract_Address, abi } from '../constants/index';
import { useState } from 'react';

// import GuestResult from "./guestresult";

function GetData({ resulturl }) {
  //   const sampleData = [
  //     {
  //         "name": "NFT#1",
  //         "description": "Alchemy's First NFT",
  //     },
  // ];
  // const [data, updateData] = useState(sampleData);
  const [showImage, setShowImage] = useState(false);
  const [userdata, setUserData] = useState({
    userId: '',
    workId: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('resulturl--->', resulturl);
    console.log('userid --->', userdata?.userId);

    await get_data();
    // updateData(sampleData);
  };

  const get_data = async () => {
    try {
      const Instance = await connectingWithSmartContract();
      var transact = await Instance.getGuestData(userdata?.userId);
      console.log('b');
      setShowImage(true);
      await transact.wait();
      console.log(transact);
    } catch (error) {
      alert('Please enter the correct user Id');
    }
  };

  const connectingWithSmartContract = async () => {
    try {
      const web3modal = new web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      // const signer = provider.getSigner();
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
      Connect MetaMask
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
          color: '#1ddfce',
          padding: '5px 7px',
          borderColor: '#1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        <Link
          to={'/firstpage '}
          style={{ color: '#1ddfce' }}>
          {' '}
          Home{' '}
        </Link>
      </button>

      <button
        // onClick={handleRender1}
        style={{
          backgroundColor: '#001d39',
          color: '#1ddfce',
          padding: '5px 7px',
          borderColor: '#1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        {' '}
        <Link
          to={'/forFrominfo'}
          style={{ color: '#1ddfce' }}>
          {' '}
          From Info{' '}
        </Link>
      </button>
      <button
        style={{
          backgroundColor: '#001d39',
          color: '#1ddfce',
          padding: '5px 7px',
          borderColor: '#1ddfce',
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
      <button
        style={{
          backgroundColor: '#001d39',
          color: '#1ddfce',
          padding: '5px 7px',
          borderColor: '#1ddfce',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '20px',
        }}>
        {' '}
        Get Data
      </button>
      <button
        style={{
          backgroundColor: '#001d39',
          color: '#1ddfce',
          padding: '5px 7px',
          borderColor: '#1ddfce',
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

      <div style={{ backgroundColor: '#062831' }}>
        <form action="">
          <div className="wrapper">
            <input
              value={userdata?.userId}
              name="userId"
              onChange={handlechange}
              className="name-input"
            />
            <label
              className="name-label"
              htmlFor="name">
              UserID
            </label>
          </div>

          <button
            onClick={handleSubmit}
            type="submit">
            {' '}
            GetData{' '}
          </button>
        </form>

        <form>
          <div style={{ backgroundColor: '#001d3d' }}>
            {showImage && (
              <div
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffc300',
                  padding: '5px 7px',
                  borderColor: '#ffc300',
                  borderRadius: '3px',
                  height: '100%',
                  width: '100%',
                }}>
                <img
                  style={{ height: '50%', width: '50%' }}
                  src={resulturl}
                  layout="fill"
                  alt=""
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default GetData;
