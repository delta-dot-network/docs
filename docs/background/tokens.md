---
title: Tokens on delta
description: Information on tokens, NFTs, and token minting
sidebar_label: 'Tokens'
sidebar_position: 2
---

# Tokens on the delta Network

## 1. Overview
- What is a token in delta?
- Design philosophy: tokens as verifiable, locally-defined assets
- Core components: Mints, Vaults, Metadata

## 2. Fungible Tokens
- Definition and common use cases (currency, loyalty points, credits)
- Structure of a fungible token in delta:
  - Mint ID
  - Decimal precision
  - Initial supply vs. inflation model
- How balances are tracked in vaults
- Transfer logic (domain-defined)

**Example:** Creating a stablecoin in your domain

## 3. Non-Fungible Tokens (NFTs)
- Definition and use cases (media, collectibles, identity)
- Structure of an NFT:
  - Unique token ID
  - Metadata link
  - Optional attached state (e.g. usage counter, timestamp)
- How ownership is tracked via vaults
- Domain flexibility in encoding NFT behavior

**Example:** Minting an access badge NFT that expires after 30 days

## 4. Token Mints
- What is a Mint in delta?
- Mint creation and configuration:
  - Name, symbol, decimals
  - Token type (fungible, NFT)
  - Mint authority (optional)
- Role of the Mint in vault state transitions (e.g. credit, burn)
- Verifiability of mint parameters in zk proofs

## 5. Vault Integration
- Tokens live inside vaults (not accounts)
- Vaults track balances and object ownership per token mint
- Example vault structure for fungible vs. NFT

## 6. Minting Tokens
- How to mint:
  - Create a Mint
  - Call `mint_to` with vault target
- Authority models:
  - Fixed supply
  - Programmatic minting (e.g. upon user action)
- Sample flow:
  - User claims a token airdrop
  - Proof includes a `credit` to their vault

## 7. Token Metadata
- Attaching metadata to tokens (e.g. name, image, description)
- Storage and indexing:
  - Off-chain (IPFS, HTTPS)
  - Future on-chain metadata registry
- Metadata in proofs: what can/can’t be relied upon
- Custom metadata formats per domain

## 8. Security & Best Practices
- Preventing double-minting
- Vault permissioning
- Auditing token logic via Laws
- Recommended UX: symbol display, decimals, etc.

## 9. Coming Soon
- Cross-chain compatibility: exporting/importing delta tokens
- Token registries: discoverability and trusted mint lists
- Rich token metadata standards (e.g. NFT royalties, attributes)