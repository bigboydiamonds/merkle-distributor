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
Ensure .env variables are set. 

Update scripts/claimData.json for { receipient_address:claimable_token } entries.

Run `yarn generate-merkle-root:claim` to generate merkle root, outputted in scripts/result.json.

Run `yarn deploy-merkle-distributor:claim` to deploy the merkle distributor contract on Sepolia.
