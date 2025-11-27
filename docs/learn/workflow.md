---
title: Example workflow
sidebar_label: 'Example workflow'
sidebar_position: 2
---

# Example domain application workflow

Domains are independent applications built on delta that manage their own transaction logic and workflows. They execute custom logic using familiar programming languages and tools, while securely settling asset transfers through delta’s shared global ledger.

1. A customer finds your application and decides to try your product. They sign-up with Google, email, Apple, or whatever your application uses. As part of onboarding, the user will register a passkey which will serve as their delta keypair in the future.
2. When the customer starts a transaction that your application wants to settle on delta, the domain executor will construct and present a message for the user to sign with their passkey (same UX as Apple Pay). If it was the user’s first touchpoint to delta, a vault will be automatically created for them using the keypair of the passkey.
3. The signed transaction is executed and applied locally immediately, providing instant confirmation to the user.
4. The domain decides when to settle all local changes to delta; signed user transactions, the aggregated changes, and other context is used to create a RISC-V proof (current version uses SP1). The state difference list (SDL) and proof are sent to delta via the domain’s chosen validator, which will start the consensus process immediately. Global ordering of state updates is not needed, which mitigates congestion and latency issues seen in legacy blockchains.
5. After the synchornization and verification process, updates are applied and finalized to global state. 

### What does this mean for the end user?
- **No gas:** Network fees only apply during state updates from the domain to the base layer, which means your customers will never have to worry about gas.
- **No crypto wallets:** delta supports passkey signing, allowing users to transact with familiar UX and quick setup.
- **No delays:** transactions within a domain are applied locally immediately, so users don't need to wait for base layer finality.

On delta, the user experience is what you design it to be - without the interruptions or restraints of legacy blockchains.