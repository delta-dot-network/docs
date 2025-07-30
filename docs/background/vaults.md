---
title: Vaults and Accounts on delta
description: Overview of vaults and the delta account model
sidebar_label: 'Vaults'
sidebar_position: 3
---

# Accounts and Vaults on the delta Network

## Overview
- Vaults as isolated state containers for balances and objects
- Stateless execution, stateful assets
- Analogy: vaults as “smart folders” for tokens

## Account Model Design
- One vault per (user x domain x asset)
- Named vaults and auto-generated vaults
- How vaults compare to Ethereum accounts or Solana token accounts

## Token Holding Vaults (User Vaults) {#vaults}


```rust title="token holdings data struct"
pub struct TokenHoldings {
    /// A mapping from (fungible) token IDs to their respective balances in plancks.
    fungibles: HashMap<TokenId, Planck>,
    /// A mapping fron NFT token ids to their respective holdings, that is, a
    /// set of collectibles in the collection issued by the given token id.
    nfts: HashMap<TokenId, nft::Holdings>,
}
```
- Fungible balances
- NFT objects
- Linked metadata (if any)
- Proof-compatible state hashing

## Token Pool Vaults (Program Vaults)
- Create vault
- Debit, credit, mint, burn
- Snapshot and serialize vault state for proving

## Escrow Vaults
- How vaults are initialized
- How domains authorize vault actions
- Code sample: minting and crediting a vault