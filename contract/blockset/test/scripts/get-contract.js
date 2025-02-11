// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const proxy = await ethers.getContractAt("Proxy","0xF3bCFEB2538c4D00cdD9c54d7AB00c00856ffADE");
  console.log("proxy deployed at:", proxy.address);
  var addr = await proxy.getcontract();
  console.log("current blockset address is:", addr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
