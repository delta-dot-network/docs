---
title: Welcome
sidebar_label: 'Welcome'
sidebar_position: 1
---

# Introducing delta

delta is a new distributed system that lets you launch **independent execution environments, called *domains,*** plugged into our zk-secured, global shared state machine. 

### The delta Network exists in two layers
1. **Domains:** Independent environments that handle end-user experience, transaction execution and ordering - *but not the assets themselves*.
    - Users transact within domains, which process state changes locally.
    - Domains submit State Diff Lists (SDLs) to validators, which include proofs of minimal global laws (e.g. debit messages were signed by a valid private key, a vault did not spend more than its balance).
    - Domains can optionally add proofs of additional execution (e.g. order-matching logic) or domain-specific custom local laws.

2. **Base Layer:** Validators maintaining a globally consistent state of accounts and assets. Vaults and tokens live on the base layer, and can only be affected by zk-proven, valid SDLs.
    - Validators use RISC-V proofs to independently verify SDLs for compliance with global and local laws.
    - Verified SDLs are gossiped between validators, who update the global state without requiring block production or global ordering.
    - Since assets never leave the base layer, interoperability between domains becomes a native transaction with no bridging required.
    
### What does this mean for domains?
Each domain keeps the freedom of a bespoke appchain while inheriting the security, liquidity, and interoperability of the delta base layer. This means you can have full control over your business or transaction fees, execution and sequencing logic without having to manage blockchain security infrastructure. This not only allows builders to ship quickly, but also enables new use cases: delta domains can be built in any language since they aren't constrained to smart contracts, and existing enterprise applications can quickly connect to delta with minimal changes.