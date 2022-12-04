const {network} = require("hardhat")
const {developmentChains , VERIFICATION_BLOCK_CONFIRMATIONS} = require("../helper-hardhar-config")



module.exports = async({getNamedAccounts,deployments})=>{
    
const {deploy,log}= deployments
const {deployer}= await getNamedAccounts()

const waitBlockConfirmations = developmentChains.includes(network.name)?1:VERIFICATION_BLOCK_CONFIRMATIONS
log("--------------------------------------------------------------")

const box =await deploy("Box",{
    from:deployer,
    args:[],
    log:true,
    waitBlockConfirmations: waitBlockConfirmations,
    proxy:{
        proxyContract:"OpenZeppelinTransparentProxy",
        viaAdminContract:{
           name:"BoxProxyAdmin",
           artifact:"BoxProxyAdmin"

        },
    }

})


} 

module.exports.tags = ["all", "box"]