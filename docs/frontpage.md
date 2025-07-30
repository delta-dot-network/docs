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
    
### What does delta mean for domains?

With delta, you gain the agility of modern web infrastructure combined with the security and trust of blockchain-grade settlement, empowering you to build, iterate, and scale next-generation financial products with unprecedented speed and confidence.

**Develop and Iterate at Web2 Speeds**
- Delta removes the friction typically associated with blockchain development. You can build or integrate your delta with the environment of your choice using familiar programming languages, cloud services, and authentication frameworks. This lets your team innovate and deploy at the rapid pace of modern web applications, not bound by specialized blockchain expertise or long deployment cycles.

**Retain Complete Control of Settlement and Economics**
- On delta, you define exactly how and when your transactions settle. You can provide users with instant confirmations and finalize transactions on-demand based on your business logic and risk management rules. You retain full control over the economic models, fee structures, and monetization strategies—free from the constraints and volatility typical of legacy blockchains with predefined settlement schedules.

**Secure, Global Interoperability**
- While you focus on developing powerful user experiences and innovate on product, delta's base layer validators secure settlement and maintain a global and permissionlessly viewable ledger of assets and accounts. This shared global state provides robust security guarantees and ensures seamless interoperability across the entire delta ecosystem.