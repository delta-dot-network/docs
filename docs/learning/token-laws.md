---
title: Token Issuance
sidebar_label: 'Token Issuance'
sidebar_position: 5
---

# Issuing tokens on delta and defining Token Laws

Issuing tokens on the delta Network is simple. Fungible tokens and their token laws (e.g. allow/block lists) are supported natively.

Each fungible token or NFT collection exists on delta as a [Token Mint](../background/tokens), controlled by the issuing party and located on a domain.
Creating a new token, issuing additional supply, or updating token laws are all handled with a single transaction which can be created with a HTTPS API and signed with a library; ***no need to deploy any smart contracts.***

### Token Laws
delta supports native token-level controls which cover the vast amount of compliance use cases. For each token, issuers will be able to define
- **Allow/block-listed user addresses:** Control which accounts can mint/transfer/receive the token.
- **Allow/block-listed domains:** Control which domains the token can travel to.
- **Required credential:** Only accounts with the required credential (such as a KYC NFT) can mint/transfer/receive the token.

<br />
![Token Law Workflow Diagram](/img/token_law_diagram.png)