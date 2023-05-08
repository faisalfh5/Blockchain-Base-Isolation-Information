
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