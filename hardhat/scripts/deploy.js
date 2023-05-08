const { ethers } = require("hardhat");

async function main (){

  const StoreDataContract = await ethers.getContractFactory("StoredData");

  const DeployedStoreData = await StoreDataContract.deploy();

  await DeployedStoreData.deployed();

  console.log("CRUD Smart Contract Adderss", DeployedStoreData.address);


}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
