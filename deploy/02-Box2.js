const {network} = require("hardhat")
const {developmentChains , VERIFICATION_BLOCK_CONFIRMATIONS} = require("../helper-hardhar-config")




module.exports=async({getNamedAccounts,deployments})=>{
    const {deploy,log}= deployments
    const {deployer}=await getNamedAccounts()

    const waitBlockConfirmations = developmentChains.includes(network.name)?1:VERIFICATION_BLOCK_CONFIRMATIONS
    log("--------------------------------------------------------------")



    const Box2 = await deploy("Box2",{
    from:deployer,
    log:true,
    args:[],
    waitBlockConfirmations:1||waitBlockConfirmations
    

    })


/**
 *deploying "Box2" (tx: 0x20e766827c0135bd0909713a6ade2ab70f28ec50e7e816f88027381fcfc8e14e)...: deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 198607 gas
 */


}

module.exports.tags = ["all", "box2"]