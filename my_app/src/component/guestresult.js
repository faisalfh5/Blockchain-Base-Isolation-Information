// import axie from "../tile.jpeg";
import web3Modal from 'web3modal';
import { ethers } from "ethers";
import {StoreData_Contract_Address, abi } from '../constants/index';

 export const connectingWithSmartContract = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
       const contract = new ethers.Contract(StoreData_Contract_Address, abi ,signer);
       return contract;

    } catch(error){
        console.log ("something went wrong while connecting with contract ")
    };
}

// function GuestResult (data) {
//     const newTo = {
//         pathname:"/nftPage/"+data.data.tokenId
//     }
//     return (
        
//         <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
//             <img src={data.image} alt="" className="w-72 h-80 rounded-lg object-cover" />
//             <div className= "text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
//                 <strong className="text-xl">{data.data.name}</strong>
//                 <p className="display-inline">
//                     {data.data.description}
//                 </p>
//             </div>
//         </div>
    
//     )
// }

// export default GuestResult;
