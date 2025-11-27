---
title: delta Primitives
---

# delta Primitives

## Tokens

delta’s token design is simple with only two token standards: fungible, and non-fungible (NFTs). All assets on delta are represented by one of these two primitives.

### Fungible Tokens

A token is considered fungible if each unit is identical and interchangeable with any other unit of the same token, similar to how one dollar bill has the same value as any other dollar bill.

Tokens on delta are stored in [Token Holdings Vaults](../glossary#token-holding), while all their metadata (such as token name and issuer) is stored in the [Token Mint Vault](../glossary#token-mint). Fungible tokens are represented in holdings or transaction messages simply by a **Token ID** and a **balance** in [plancks](../glossary#planck), the lowest denomination of a token on delta.

The most basic fungible token on the delta Network is the **delta native token**, which is used for transactions to the delta base layer.

### Non-Fungible Tokens (NFTs)

A non-fungible token (NFT) is a unique digital asset that cannot be replicated or exchanged on a one-to-one basis with another token, as each NFT contains distinct metadata and properties that differentiate it from all others.

On delta, a NFT is identified by its **Collection ID** (the address of the NFT mint vault) and the **ID** of that specific token.

## Transactions

Since delta is a two-layer system, there are several different transaction types depending on who the message sender and recipient is.

Domain application code and business logic may affect the message content, timing or execution for **user-level transactions**, which can be achieved by building upon one of the base user-level transaction types: **debitAllowance** and **tokenMint**.

Below is a summary of all transaction operations in the delta ecosystem.

| Transaction | Purpose | Message Sender | Message Recipient | Consensus |
|-------------|---------|----------------|-------------------|-----------|
| **debitAllowance** | Transfer tokens up to a signed amount from one vault to another | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Create tokenMint** | Issue a new token with the given parameters (including initial supply and recipient vaults) | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Increase Supply of a tokenMint** | Issue additional supply of an existing tokenMint to the given recipient vaults | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Submit SDL** | Submit state updates to the base layer | Domain Executor | Chosen Validator | Fast-path consensus |
| **Submit Proof** | Submit cryptographic proof of state updates | Domain Executor | Chosen Validator | Fast-path consensus |
| **Submit Domain Agreement** | Register domain with the delta network | CLI | Chosen Validator | Epoch end transition |
| **Declare Validator** | Add new validator to consensus set | CLI | Chosen Validator | Epoch end transition |
| **Base Layer Migration** | Allows a user to forcefully migrate owned assets out of an unresponsive or malicious domain | Vault private key holder (user) | Chosen Validator | Epoch end transition |
