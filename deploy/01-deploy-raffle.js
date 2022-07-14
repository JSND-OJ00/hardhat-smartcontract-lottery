module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer }  = await getNamedAccounts()

    const raffle = await deploy("raffle", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: 6,
    })
}