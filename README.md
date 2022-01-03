# Overview

Pangolin will create a subnet which will provide both permissioned and permissionless Liquidity to the entire ecosystem of subnets. 

Please see [Roadmap](./Roadmap.md) to understand how we'll deliver Camelot.
# Key concepts

## Subnet - Camelot

Camelot will be the Pangolin subnet. It will have the following characteristics

- Will hold Liquidity of all tokens within the Avalanche ecosystem
- Will require Validators to hold PNG in order to become validators
- Will include automatic arbitrage. Profits from arbitrage will accrue back to validators and PNG holders
- Will support a rules engine that determines how tokens can flow between subnets **(**Using DID, zkKYC and NTT)
- Will allow fractional holdings of liquidity. This will allow a portion of liquidity to be deployed in interest bearing ventures with profit accruing back to LPs (**Phase 2 functionality)**
- Will focus on B2B rather than B2C. So Camelot will provide Liquidity to DeFi protocols. Although the first phase will be Camelot providing liquidity to the Pangolin DEX to test the functionality.

## Validators - Knights of the Round Table

Validators for the Camelot subnet will also serve as arbitrageurs. 

So beyond running the Avalanchego client, the validators will also run another client, that scans for arbitrage opportunities across the following sources:

- CEX's (via connectors)
- DEX's
- Subnets

When a Validator picks up an arbitrage opportunity, it will submit the opportunity to Excalibur which will then take the opportunity. 

So to become a Knight, you need to purchase a license in PNG for 3, 6 or 12 months. There should also be a limit to how many validators are allowed to participate. For example, if the entire PNG supply is locked up, that means there is a hard cap on how many people can be a validator.

We also need to enforce hardware requirements to make sure that Camelot has industry leading performance

The arbitrage client will link to the AvalancheGo Client via grpc calls

## Liquidity Pools - The Holy Grail

All Liquidity Provider's capital resides in the Holy Grail. 

## Validators Treasury - Excalibur

All arbitrage profits will be paid into the Validator's Treasury. This Treasury will be used to make the Arbitrage trades. The Validators percent ownership of the Treasury is reliant on how much PNG they own.  

One of the key questions will be whether each Validator will take the arbitrage trade or whether it will have to be enacted by a smart contract. To ensure honesty, it makes sense that the Arbitrage trades are submitted to consensus and then taken to prevent manipulation by bad actors. 

**TODO:** Determine how to protect against manipulation of the Treasury. For example a validator could get a flash loan for PNG and then withdraw the majority of the Treasury. 

## Oracle - Merlin

We will also expose an Oracle for the all the prices that exist within Camelot. This price feed will be exposed via an API so that anyone requiring Liquidity from Camelot has access to the latest prices. 

## Liquidity Providers

However it's the same model, although LP's now get three revenue sources

- Swap Fee's
- PNG rewards
- Percent of the arbitrage profits
- Fractional Interest bearing rewards **(Phase 2)**

## Identity

In order for Camelot to serve both regulatory compliant capital as well as non compliant capital we'll need Identity that determines whether traders/Protocols are compliant. To do this we need the following key building blocks

- Decentralized ID's (DID's)
- NTT  (An Ava labs specific concept)
- zkKYC

NTT's are a concept for grouping DID's. So for example you may have an NTT that represents citizenship within the USA. 

We'll start implementing DID's in Pangolin that rewards users with Pangolin NFT's. This will help us start integrating the building blocks. So let's talk about how the end state will look

- User logs onto Pangolin (and in the future any of Camelot's customers)
- User registers a DID (At Pangolin, they'll get rewarded with an NFT)
- The DID is linked to both an NTT and zkKYC
- The user wants to trade a tokenized security from the London Stock Exchange
- If the DID is linked to an acceptable NTT and they have KYC/AML, then the user can trade the security

## Customer

Camelot's customers will be DeFi protocols that require liquidity. We will then lease a certain amount of liqudity to them. This could theoretically be a Compound model, whereby if they fail certain conditions the liquidity gets liquidated. For example, any of these conditions could cause a liquidation:

- Non compliance of Idenity
- Reserves fall below a certain threshold
- Others

## Governance/Tokenomics

Governance will be a competition between whales and the community. By encouraging the Whales to compete against the common users, we should get natural demand.

Governance will be more streamlined on the following key points

- Percentage breakdown of Arbitrage profit between validators and PNG holders
- Percentage breakdown of Swap fees between validators and PNG holders
- Amount PNG required to be locked by Validators per year
- Amount PNG required for Protocols to lend Liquidity

