import { ethers, network, run } from "hardhat";

(async () => {
  try {
    const SimpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    );
    console.log("Deploying...");
    const SimpleStorage = await SimpleStorageFactory.deploy(40);
    console.log(`Simple Storage Address: [${SimpleStorage.address}]`);
    console.log("Deployed and awaiting verification...");
    await SimpleStorage.deployed();
    console.log("verified...");
    console.log("****** Contract Interaction *******");
    let favouriteNumber = await SimpleStorage.retrieve();
    console.log(`Favourite Number: [${favouriteNumber.toString()}]`);
    console.log("******* Updating Favourite Number *********");
    await SimpleStorage.store(300);
    favouriteNumber = await SimpleStorage.retrieve();
    console.log(`Updated Favourite Number: [${favouriteNumber.toString()}]`);
    if ([4, 5, 80001].includes(network.config.chainId!)) {
      console.log("***** Contract Code Verification *****");
      await SimpleStorage.deployTransaction.wait(6);
      await run("verify:verify", {
        address: SimpleStorage.address,
        constructorArguments: [40],
      });
    }
  } catch (error) {}
})();
