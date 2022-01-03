# Arbitrage client

## Proof of Concept
The proof of concept will rely on building an Arbitrage client in Go, that will then scan Pangolin, Binance and Coinbase for Arbitrage opportunities and then execute them as and when they arise.

Reasons for choosing Go as the language is due to Ava labs favouring Go and it will align more closely with upcoming releases to the Subnet architecture.

First step will be to refactor Hummingbot's Connectors from Python to Go.

You can find Hummingbots Connectors here:
https://github.com/CoinAlpha/hummingbot/tree/development/hummingbot/connector

We will start with the CEX's that have the highest AVAX volume, as of this commit, this is:
* Binance
* Coinbase

The next step after that is connecting up programmatically to do those CEX's. Hard part of this is that we'll need an institutional account for each Exchange. This will be configured through Pangolin's Legal Structure and an Enterprise account setup for each CEX.

Then we'll need to create a bot that consistently queries all three sources:
* Pangolin
* Binance
* Coinbase

We'll look for arbitrage opportunities on the following major pairs:
* AVAX - USD
* ETH - USD
* QI - USD

We will run this with some of Pangolin's working capital

# Next steps
After the PoC has been successfully completed, we will then link the Arbitrage client to Avalanche's Consensus. An interesting thing to note here is that we don't actually need an EVM compatible chain. All we need is for everytime an Arbitrage opportunity presents itself is to determine whether all validators are in consensus to take this trade.

Let's look at an example:
* Validator picks up an arbitrage opportunity between Pangolin and Binance on AVAX - USD
* Treasury has $10 million in Assets
* Reserve ratio of Treasury is set at 50%
* Validator proposes arbitrage opportunity at $100,000 for an arb profit of $1,000
* Validators confirms that the trade won't go below reserve ratio
* Trade occurs

Now some of you might have noticed a flaw to this:
* The time for consensus to be reached may have caused the arbitrage opportunity to disappear due to faster bots

This can then mean that a Governance parameter can be set which gives Validators autonomy to trade up to a certain amount. So let's say Validator xyz can trade with autonomy anything up to $100,000. If we also implement high hardware requirements, this will mitigate this risk. 

This stage will require significant testing to determine profitability. An incentivised testnet will be used.