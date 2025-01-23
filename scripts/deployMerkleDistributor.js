require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-verify')
const { ethers, run } = require('hardhat')

async function main() {
  // Claim token
  const tokenAddress = '0x2a59F49eA6e8d254A2b1B18640158A188782aDDE'
  const merkleRoot = '0xbf5b447dbf6a7252ec277aedcf355e99a4b78feb394c7eceba3da08941f5e89f'

  console.log('Deploying MerkleDistributor...')
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy(tokenAddress, merkleRoot)
  await merkleDistributor.deployed()

  console.log(`MerkleDistributor deployed at ${merkleDistributor.address}`)

  // Wait for a few blocks before verifying
  console.log('Waiting for contract to be indexed...')
  await merkleDistributor.deployTransaction.wait(6)

  // Verify on Etherscan
  try {
    console.log('Verifying contract on Etherscan...')
    await run('verify:verify', {
      address: merkleDistributor.address,
      constructorArguments: [tokenAddress, merkleRoot],
    })
    console.log('Contract verified successfully!')
  } catch (error) {
    console.error('Verification failed:', error)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
