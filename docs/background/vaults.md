---
title: Vaults and Accounts on delta
description: Overview of vaults and the delta account model
sidebar_label: 'Vaults'
sidebar_position: 3
---

# Accounts and Vaults on the delta Network

## 1. Overview
- Vaults as isolated state containers for balances and objects
- Stateless execution, stateful assets
- Analogy: vaults as “smart folders” for tokens

## 2. Account Model Design
- One vault per (user x domain x asset)
- Named vaults and auto-generated vaults
- How vaults compare to Ethereum accounts or Solana token accounts

## 3. Vault Contents
- Fungible balances
- NFT objects
- Linked metadata (if any)
- Proof-compatible state hashing

## 4. Vault Operations
- Create vault
- Debit, credit, mint, burn
- Snapshot and serialize vault state for proving

## 5. Guide: Creating and Using Vaults
- How vaults are initialized
- How domains authorize vault actions
- Code sample: minting and crediting a vault

## 6. Coming Soon
- Vault portability (cross-domain migration)
- Encrypted vault contents
- Vault-as-identity pattern