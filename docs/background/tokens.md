---
title: Tokens on delta
description: Information on tokens, NFTs, and token minting
sidebar_label: 'Tokens'
sidebar_position: 2
---

# Tokens on the delta Network
:::info
Coming soon: Information on **stablecoin issuers**, cross-chain compatibility
:::
## Overview
delta’s token design is simple with only two token standards: fungible, and non-fungible (NFTs). All assets on delta are represented by one of these two primitives.

### Fungible Tokens
A token is considered fungible if each unit is identical and interchangeable with any other unit of the same token, similar to how one dollar bill has the same value as any other dollar bill.

Tokens on delta are stored in [Token Holdings Vaults](/docs/docs/background/glossary#token-holding), while all their metadata (such as token name and issuer) is stored in the [Token Mint Vault](#token-mints). Fungible tokens are represented in holdings or transaction messages simply by a **Token ID** and a **balance** in [plancks](/docs/docs/background/glossary#planck), the lowest denomination of a token on delta.

The most basic fungible token on the delta Network is the **delta native token**, which is used for transactions to the delta base layer.

### Non-Fungible Tokens (NFTs)
A non-fungible token (NFT) is a unique digital asset that cannot be replicated or exchanged on a one-to-one basis with another token, as each NFT contains distinct metadata and properties that differentiate it from all others.

On delta, a NFT is identified by its **Collection ID** (the address of the NFT mint vault) and the **ID** of that specific token.
```rust title="NFT data struct"
pub struct NFT {
    /// The metadata associated with this NFT.
    pub metadata: Metadata,

    /// The collection this NFT belongs to.
    pub collection_id: TokenId,

    /// Id of NFT
    pub id: Id,
}

pub struct Metadata {
    /// The name of the NFT or the collection.
    pub name: String,

    /// The description of the NFT or the collection.
    pub description: String,

    /// Additional attributes stored as key-value pairs, e.g.
    /// ```"uri" -> "https://my-delta-nft.org/123"```
    pub attributes: HashMap<String, String>,
}
```

## Token Mints
A Token Mint is a data structure which represents a single fungible token type or NFT Collection. The Mint itself is considered a vault on the delta Network. This means that it has an Address, which is used as the **TokenID**, and an **Owner** who can make changes or issue more supply.

The process of issuing a new token on delta involves creating a token Mint to declare its properties.

Metadata contained within the Mint consists of Name and Symbol.
```rust title="example tokenMint for a fungible token
let token_mint = fungible::Mint {
    supply: 1_000_000,  // 1 million tokens (in smallest unit)
    metadata: fungible::Metadata {
        name: "Otter".to_string(),
        symbol: "OTR".to_string(),
    },
};
```