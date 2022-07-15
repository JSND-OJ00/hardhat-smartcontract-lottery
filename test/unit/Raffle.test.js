const { assert, expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const { HARDHAT_NETWORK_NAME } = require("hardhat/plugins");
const { developmentChains, networkConfig } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Tests", function () {
        let raffle, raffleContract, vrfCoordinatorV2Mock, raffleEntranceFee, interval, player

        beforeEach(async () => {
            accounts = await ethers.getSigners()
            // deployer = accounts[0]
            player = accounts[1]
            await deployments.fixture(["mocks", "raffle"]) // Deploys modules with the tafs "mock" and "raffle"
            vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock") // Returns a new connection to the VRFCoordinatorV2Mock contract
            raffleContract = await ethers.getContract("Raffle") // Returns a new connection to the Raffle contract
            raffle = raffleContract.connect(player) // Returns a new instance of the Raffle contract connected to player
            raffleEntranceFee = await raffle.getEntranceFee()
            interval = await raffle.getInterval()
        })

        describe("constructor", function () {
            it("initializes the raffle correctly", async () => {
                const raffleState = (await raffle.getRaffleState()).toString()
                assert.equal(raffleState, "0")
                assert.equal(
                    interval.toString(),
                    networkConfig[network.config.chainId]["keepersUpdateInterval"]
                )
            })
        })

        describe("enterRaffle", function () {
        })
    })