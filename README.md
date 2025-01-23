# @uniswap/merkle-distributor

[![Tests](https://github.com/Uniswap/merkle-distributor/workflows/Tests/badge.svg)](https://github.com/Uniswap/merkle-distributor/actions?query=workflow%3ATests)
[![Lint](https://github.com/Uniswap/merkle-distributor/workflows/Lint/badge.svg)](https://github.com/Uniswap/merkle-distributor/actions?query=workflow%3ALint)

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## To Deploy Merkle Distributor

Update scripts/claimData.json for { receipient_address:claimable_token } entries.

Run `yarn generate-merkle-root:claim`, and replace the outputted contents in terminal to scripts/result.json.

Using the merkle root generated and updated in scripts/result.json, update these lines:

```
  const tokenAddress = '0x2a59F49eA6e8d254A2b1B18640158A188782aDDE' // Claimable token address
  const merkleRoot = '0xbf5b447dbf6a7252ec277aedcf355e99a4b78feb394c7eceba3da08941f5e89f' // Generated merkle root
```

Then, run `npx hardhat run scripts/deployMerkleDistributor.js --network sepolia`
