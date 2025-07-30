---
title: Transactions on delta
description: Details on transaction types in domains and the delta base layer
sidebar_label: 'Transactions'
sidebar_position: 4
---

# Transactions on the delta Network

## 1. Overview
- Two layers of transactions: domain-level and base-layer SDLs
- Design principle: domains define UX and logic; base layer ensures integrity

## 2. Transaction Lifecycle
- Step-by-step example from user intent to execution and finalization
- Role of executors and zk proof generation

## 3. Transaction Types
### Domain Transactions
- Token transfer, NFT mint, app-specific messages  
- Custom transaction formats permitted  

### Base Layer Transactions
- SDL submission  
- Proof attachment  
- Validator consensus

## 4. Messages vs. Transactions
- Internal domain messages vs. cross-domain or validator messages
- Format and routing

## 5. Guide: Executing a Token Transfer
- Interface for sending
- Sample domain code
- Resulting state diff

## 6. Coming Soon
- Transaction signing standards
- Replay protection across domains