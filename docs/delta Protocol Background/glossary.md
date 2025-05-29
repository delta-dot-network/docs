---
title: Glossary of delta terms
description: delta terms and definitions
sidebar_label: 'Glossary'
sidebar_position: 1
---

# Glossary of delta Terms

| Term | Description |
| ----------- | ----------- |
| Base Layer | The network of validators that use consensus to validate proofs and SDLs sent from domains, and track global state |
| Execution Layer | Describes the domain layer of the delta ecosystem, as all transaction execution and compute occurs on domains. |
| Vaidator | A compute node on the network communicating with other validators (its peers) to keep track of the system and its state. |
| Domain | A local execution environment in delta. In addition to any custom code (including frontend interfaces and application logic), a domain contains an Executor which handles the domain's integration with the delta base layer |
| Executor | The component of a domain which contains a copy of the domain's shard (including all vaults and balances), handles the creation of SDLs, coordinates proof generation, and communicates with the delta base layer. Domain operators will use the delta SDK to set up and optionally customize their executor. |
| Shard | Global state on the Base Layer is organized into shards, where each domain owns a single shard. A shard contains vaults and balances for the accounts and programs operating on that domain, and domains may only debit from their owned shard (credits can be applied to external shards). |
| Transaction | A signed message to change state. Transactions which occur on domains may be referred to as "user-level transactions" or sometimes "intents". Transactions from domains to the base layer (submission of SDLs and Proofs) are referred to as "execution transactions" and transactions directly to the base layer (deployment of a new domain or validator) are "base layer transactions." |
| State Diff | A change to a specific vault on a specific shard, which is created by summarizing the user-level transactions which have occurred on the domain affecting that vault. |
| State Diff List (SDL) | An aggregated list of state diffs for a given domain's shard. SDLs are submitted to the base layer to update balances on the shard and finalize the user-level transactions. |
| SDL Proof | A RISC-V proof that a given SDL is valid (all summarized user-level transactions followed the applicable laws). |
| Laws | Rules that user-level transactions must abide to in order to be valid. The laws are what's proven by the proof system. |
| Global Laws | The rules of the delta network which apply accross all user-level transactions in all domains. These are designed to be minimal and only restrict behavior which would break the network (e.g., a debit transaction must have a valid signature from the vault owner, a vault balance must be more than the debited amount). |
| Local Laws | Rules that are imposed by a domain and apply to user-level transactions which occur on that domain. |
| Planck | The minimal denomination for fungible tokens on delta |
| Executor Lease Agreement (ELA) | A record stored at the base layer which identifies a domain along with the domain's executor and owned shard. |
| Vault | A data structure which exists in execution state (on shards). There are two kinds of vaults, tokenMints and tokenHoldings. Vaults are identified by the pubkey hashDigest (of the owner) and the shard (of the domain where the vault is stored). |
| Token Mint | A vault type which represents a non-native token on the delta network. TokenMint vaults do not store tokens, only information. This includes the Token ID (equivalent to the vault ID), minted token supply, and token metadata (token name and symbol/ticker). Upon creation of a new token mint, the initial supply and credited tokenHoldings vaults is defined. |
| Token Holding | A "typical" vault, which holds tokens and is owned by either a user, program, or domain executor. |
| Debit (debit allowances) | A signable user-level transaction message used to transfer tokens from a tokenHoldings vault. Debit Allowance specifies a maximum allowed debit for a given token ID and tokenHoldings vault. Once signed by the private key of the vault, up to the signed amount can be debited (based on the executor logic). |
