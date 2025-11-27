---
title: Tutorial
---

# Using the Example Domain and CLI Wallet

:::info
the delta devnet is currently on version 0.5.18, please ensure your dependencies match the compatible versions:

- delta_domain_example_bin v0.1.4
- delta_domain_example_wallet v0.1.4
- delta-cli v0.4.5
:::

### Overview

This tutorial will walk you through deploying our example domain (part of the domain SDK) on the delta devnet, then submitting some user-level transactions (including minting a brand-new token and transferring tokens between vaults) on that example domain.

#### Steps
0. [Configure dependencies](./setup)
1. Install packages
2. Declare your domain agreement to the delta Base Layer
3. Run the example domain locally
4. Use the example wallet to transfer native tokens
5. Use the example wallet to mint a new token


### 1. Installation

In a terminal, run the following to install the delta CLI tools, example domain, and example wallet.

``` bash
cargo install --registry delta "delta-cli"
cargo install --registry delta "delta_domain_example_bin"
cargo install --registry delta "delta_domain_example_wallet"
```
#### Environment Variables

We recommend saving the following environment variables to simplify commands in the terminal. 

The devnet endpoint is for a validator in the live delta devnet, and the domain private key must be pre-seeded with base layer funds. These resources are [provided by the delta team](./setup#delta-dependencies).

```bash
export DEVNET="<VALIDATOR_ENDPOINT>"
export DOMAIN_PRIVKEY="<PATH_TO_YOUR_PRIVKEY>"
export SHARD="<DOMAIN_SHARD_ID>"
```

### 2. Declare your domain

Adding a new domain to the delta Network is a base layer transaction, meaning it is sent directly to the base layer. Base layer transactions must wait until the end of an epoch (10 minutes on devnet) to be applied.

#### Domain Configuration

The core configuration of a delta domain is done through a yaml configuration file. Create a `domain.yaml` file in your working directory with the following details, using the keypair and shard [provided by the delta team](./setup#delta-dependencies).

```yaml
shard: <DOMAIN_SHARD_ID>
keypair: <PATH_TO_YOUR_PRIVKEY>
rpc_url: <VALIDATOR_ENDPOINT>
```

#### Submit Domain Agreement

In a terminal, run the following to register your domain with the devnet, using the details stored in the `domain.yaml` file

```bash
delta_domain_example_bin submit-domain-agreement
```

#### Query Domain Agreement Status

Since domain registration transactions are processed in our epoch-end state transition, you must wait until the beginning of the next epoch for your domain to be active on the network.

The devnet has an epoch duration of 10 minutes. You can check the current epoch with
```bash
delta-cli epoch --url $DEVNET
```
and use the following to confirm your agreement has been applied
```bash
delta-cli domain-agreement --url $DEVNET $SHARD
```

### 3. Run the example domain

In a new terminal, run the below command:

```bash
delta_domain_example)bin run --api-port 3000
```
This will launch our generic domain, that will live as long as you let the process run.
Running this command has three effects:

- A `Runtime` is launched, waiting to receive `Verifiable` (user-level transactions and their proving context) and able to submit `SDL` (state diff list of aggregated user-level transactions) to the base-layer
- An `admin-api` is launched and listens on an auto-assigned port (default 4001). Users will be able to send API commands to this server in order to trigger `SDL` and `SDL-Proof` creation and submission.
- A minimal web-server is launched and listens on the port `3000` . Users can publish signed `verifiable`s to this server and query the current state of the domain .

At this point, you are now running a minimal domain (just an adapter with no frontend) which is connected to the delta devnet. If you are interested in diving deeper to customize the `Runtime`, this can be done using the domain SDK and customization traits.

### 4. Use the example wallet for a native token transfer

Create two new ed25519 keypairs to represent two new users.
In the terminal:

```bash
delta-cli keygen -p key1.json
delta-cli keygen -p key2.json
```

Save the following environment variables to easily reference these users in future commands.

```bash
export USER1=$(delta-cli owner-id --keypair key1.json)
export USER2=$(delta-cli owner-id --keypair key2.json)
```

#### Create token debit

Our two recently-generated users both have no funds, which also means their vaults do not exist yet on the domain executor or delta devnet.

The following terminal command will debit 200 delta native tokens from the `Vault` owned by the domain, and credit them to our new User1:

```bash
delta_domain_example_wallet --url localhost:3000 \
    debit \
    --key-path $DOMAIN_PRIVKEY \
    --amount 200 \
    --credited $USER1
```

This command has the following actions

- A `DebitAllowance` verifiable is created with the specified fields.
- This verifiable is signed into a `SignedDebitAllowance` using the private key specified with `key-path`.
- The signed verifiable is executed locally and added to the `SDL` queue

It is important to note that the `Verifiable` is only applied locally (within the domain) right away. This is by design, since global settlement is controlled by the domain. Domains can use custom logic to control when `SDL`s are submitted to the delta base layer, allowing them to aggregate and batch submit a large amount of state-diffs resulting from many executed-signed verifiables after ensuring they passed any additional checks.

We can confirm that the domain’s local vault balances are now updated by querying the executor state directly using:

```bash
delta_domain_example_wallet --url localhost:3000 vault --owner $USER1
```

However, the transaction has not yet been finalized on the delta base layer, so querying for User1’s balance on the devnet will result in a “vault not found” error.

#### User to user debit

To send 100 native tokens from User1 to User2: 

```bash
delta_domain_example_wallet --url localhost:3000 \
    debit \
    --key-path key1.json \
    --amount 100 \
    --credited $USER2
```

At this point, the domain local view of balances is ahead of the global devnet by 2 balance changes. Next, we will push the changes to the devnet.

#### Settle token debits to the Base Layer

The above debits are already in the SDL queue waiting to be submitted. We can use the `/sdls/submit` endpoint from the `admin-api` to do this.

```bash
curl -X POST $ADMIN_API/admin/sdls/submit
```

This will output an SDL hash (contained within double quotes).

Next, we will use the `/prove` and `/submit_proof` endpoints of the `admin-api` to generate a proof for the output SDL and then submit it to the base layer (when using the generic example domain, this is a mock proof).

```bash
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/prove
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/submit_proof
```

SDLs with valid proofs are applied immediately via fast-path consensus, and the devnet will now reflect our new user balances:

```bash
delta-cli vault --url $DEVNET $USER1 $SHARD
delta-cli vault --url $DEVNET $USER2 $SHARD
```

### 5. Use the example wallet to mint a new token

Similar to step 3, we will use the example wallet to create a new user-level transaction (`Verifiable`), execute the transaction locally on our domain (which also generates the SDL and Proof), then settle the changes to the delta devnet.

We will mint a brand new fungible token, and distribute the initial supply to User1.

#### Create new private key for token mint

First, generate a new keypair mint1.json to have ownership of the token mint vault.

```bash
delta-cli keygen -p mint1.json
export MINT1=$(delta-cli owner-id --keypair mint1.json)
```

#### Create and execute mint transaction

The following command can be edited with the restriction that each `OwnerID` (1:1 with private keys) can only either have 1 `tokenMint` or hold non-native tokens in a `tokenHolding`. A single vault cannot contain both a `tokenHolding` and a `tokenMint`. A single vault cannot hold multiple `tokenMint`s. Native tokens can always be held.

To mint a new fungible token:

```bash
delta_domain_example_wallet --url localhost:3000 \
	mint fungible \
    --key-path mint1.json \
    --shard $SHARD \
    --token-name "Test Token" \
    --token-symbol "TT" \
    --credited "$USER1=100"
```

To execute and settle the above transactions, we use the `admin_api` like before:

```bash
curl -X POST $ADMIN_API/admin/sdls/submit
```
```bash
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/prove
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/submit_proof
```

Now if we query the base layer vault of User1 on your domain's shard

```bash
delta-cli vault --url $DEVNET $USER1 $SHARD 
```

we will see a new token Holdings section reflecting the initial balance from the token mint operation:

```
Native balance: 100 plancks
Nonce: 1
Token holdings:
TT / <token ID>: 100 plancks
```

Querying the vault information for our `tokenMint` vault Mint1 will display the token's details:

```
Native balance: 0 plancks
Nonce: 1
Fungible Token Mint for "Test Token" ("TT"). Total supply: 100 plancks
```

#### User to user transfer of newly minted token

To transfer some of this newly minted token from User1 to User2 we use the same debit command as before, specifying the token-id of our Test Token. A debit transaction with no token-id listed will default to the delta network native token.

```bash
delta_domain_example_wallet --url localhost:3000 \
    debit \
    --key-path key1.json \
    --amount 25 \
	--token-id "$MINT1,$SHARD" \
    --credited "$USER2,$SHARD"
```

As before, to execute and settle the above transaction to the Base Layer:

```bash
curl -X POST $ADMIN_API/admin/sdls/submit
```
```bash
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/prove
curl -X POST $ADMIN_API/admin/sdls/<SDL_HASH>/submit_proof
```

Checking the vault information for User2 on the devnet

```bash
delta-cli vault --url $DEVNET $USER2 $SHARD
```

will now show they have a tokenHolding of our recently minted token. 

```
Native balance: 100 plancks
Nonce: 0
Token holdings:
TT / <token ID>: 25 plancks
```

### Next Steps

You have now been introduced to delta's two layer architecture by deploying a domain, submitting several user-level transactions locally, and executing and settling SDLs globally. You have also been introduced to the example domain and wallet, which serve as a great base when building a custom domain application. To get access to the source code, please reach out to your delta contact.

The above commands can all be edited to test further iterations of user-level transactions. Use the `--help` flag on `delta_domain_example_bin` and `delta_domain_example_wallet` in your terminal to see what is possible directly.