const {ethers}= require("hardhat")


async function main(){
let version 
const BoxProxyAdmin  =await ethers.getContract("BoxProxyAdmin")
const TransparentProxy = await ethers.getContract("Box_Proxy")
const proxyboxV1= await ethers.getContractAt("Box", TransparentProxy.address)
version = await proxyboxV1.retriveVersion()
console.log(version.toString())


const Box2 = await ethers.getContract("Box2")
const upgradeBoxTx= await BoxProxyAdmin.upgrade(TransparentProxy.address,Box2.address)
await upgradeBoxTx.wait(1)
const proxyboxV2= await ethers.getContractAt("Box2",TransparentProxy.address)
version= await proxyboxV2.retriveVersion()
console.log(version.toString())


}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })