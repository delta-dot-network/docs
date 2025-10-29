---
title: ZK Proving and Global Laws
sidebar_label: 'ZK Proving and Global Laws'
sidebar_position: 3
---

# ZK Proving and Global Laws on the delta Network

The delta network is designed around the efficiencies introduced by zero knowledge proving and SNARKs. Domains do not need to prove their entire transaction execution, which would limit logic expresiveness and be computationally heavy. Instead, domains only need to prove that all transactions sent to the delta base layer follow a set of minimal **global laws**, such as:

- Every transaction must have a valid siganture
- A vault cannot spend more than its current balance
- Spend transactions can only occur through the domain associated with the vault

### How proving works in practice
The global laws proof program is included in the delta domain SDK, and all proving handling is managed by the domain runtime.

The domain SDK runtime automatically:

- ingests signed user transactions,
- applies them to local vault balances,
- aggregates valid transactions into an SDL, and
- uses the domain’s configured prover to generate a RISC-V zero-knowledge proof for that SDL.
- Once the proof is ready, the SDK handles submission of the SDL + proof to the base layer

All [proof lifecycle](../background/laws#proof-workflow) management is handled by the SDK — domains only need to configure their proving settings during initial domain setup.

### Choosing a proving setup

Each domain can choose where and how proofs are generated:

- **Succinct Network:** ideal for production-scale domains that want low latency and elastic throughput. Proof jobs are offloaded to a distributed proving network optimized for RISC-V workloads.
- **Local Prover:** suitable for domains that prefer self-hosted infrastructure or want deterministic control over proving costs and data locality.

Both options produce identical proofs and integrate seamlessly with the SDK’s submission flow.
