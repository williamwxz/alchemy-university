import { ethers } from "hardhat";

const CONTRACT_ADDR = "";

async function main() {
  const contract = await ethers.getContractAt("Contract", CONTRACT_ADDR);

  const tx = await contract.changeX(41);

  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
