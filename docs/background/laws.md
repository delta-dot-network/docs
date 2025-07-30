---
title: Laws and Proofs
description: Global and Local laws, and how they affect consensus
sidebar_label: 'Laws and Proofs'
sidebar_position: 5
---

# Laws and Proving on the delta Network

## 1. Overview
- What are Laws in delta?
- Why Laws exist: separation of logic and consensus
- Analogy: Laws as "rules of the game" enforced by proofs

## 2. Global Laws
- Defined and governed by the base layer
- Examples: valid asset movement, proof verification, invariant checks
- How Global Laws interact with state diffs (SDLs)

## 3. Local Laws
- Defined per domain
- Examples: custom tokenomics, application-specific logic, access control
- Boundaries of enforcement: proof generation vs. consensus validation

## 4. Consensus and Proofs
- The role of Laws in determining "acceptance" of a domain's transaction batch
- How Laws are embedded in SP1 zkVM programs
- How base layer validators enforce global consensus by re-checking Laws

## 5. Guide: Writing a Local Law
- Law interface
- Example: building a custom NFT restriction (e.g. one per user)
- Tips on testing and deployment

## 6. Coming Soon
- Formal Law registry and reusability
- Cross-domain shared Law templates