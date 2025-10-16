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
    - Domains submit State Diff Lists (SDLs) to validators to update the balance records stored there, along with proofs of minimal global laws (e.g. debit messages were signed by a valid private key, a vault did not spend more than its balance) to ensure all updates are valid.
    - Domains can optionally add proofs of additional execution (e.g. order-matching logic) or domain-specific custom local laws.

2. **Base Layer:** Validators maintaining a globally consistent state of accounts and assets. Vaults and tokens live on the base layer, and can only be affected by zk-proven, valid SDLs.
    - Validators use RISC-V proofs to independently verify SDLs for compliance with global and local laws.
    - Verified SDLs are gossiped between validators, who update the global state. Because of the spending constraints enforced in delta’s state model, all submitted SDLs can be processed by validators in parallel. Unlike legacy blockchains, delta does not produce blocks or require global total ordering.
    - Since all assets are issued and stored on a single base layer, assets on delta can be transferred and used across any domain on the network (i.e. the base layer provides native interoperability, no bridging required).
    
<div className="invertable-diagram">

![delta High Level Diagram](/img/delta_high_level_light.png)

</div>