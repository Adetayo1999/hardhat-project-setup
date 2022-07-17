import { expect } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("Tests on the simple storage contract", () => {
  let SimpleStorageFactory: SimpleStorage__factory;
  let SimpleStorage: SimpleStorage;

  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.deploy(500);
    await SimpleStorage.deployed();
  });

  it("favourite number is 500", async () => {
    const favouriteNumber = await SimpleStorage.retrieve();
    expect(favouriteNumber.toString()).to.equal("500");
  });

  it("favourite number gets updated to 30", async () => {
    const expectedValue = "30";
    await SimpleStorage.store(expectedValue);
    const favouriteNumber = await SimpleStorage.retrieve();
    expect(favouriteNumber.toString()).to.equal(expectedValue);
  });
});
