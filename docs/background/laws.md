---
title: Laws and Proofs
description: Global and Local laws, and how they affect consensus
sidebar_label: 'Laws and Proofs'
sidebar_position: 5
---

# Laws and Proving on the delta Network
:::info
Coming soon: Declaring and enforcing **Token Laws**
:::
## Overview
"Laws" on delta describe the rules and logic limiting user transactions. There are three categories of laws on delta:

**1. Global Laws**
- Applied to every transaction on every domain
- Intentionally minimal, only restricting activity that would break the network (e.g. valid signature required, balances cannot be negative)

**2. Local (Domain) Laws**
- Optionally defined by a domain, and only applied to transactions occurring on that domain
- Highly flexible, can be used to restrict activity (e.g. valid KYC credentials required to transact) or prove fair program execution (e.g. token distribution followed set logic)

**3. Token Laws**
- Optionally defined by the token issuer, and applied to all transactions involving the token on every domain


## Proving Workflow

### Proofs in the Transaction Workflow
The enforcement and proving of Laws is part of the transaction lifecycle:<br />
**Transaction**<br />
Users sign transaction messages.

**Execution**<br />
Valid transactions are immediately applied to the domain's local balances and added to the pending State Diff List (SDL). Global Laws are enforced at this stage to ensure only valid transactions proceed. It is best practice to also include any Local Laws in domain execution logic.

**Settlement**<br />
When a domain chooses to settle changes to the base layer, the State Diff List, transaction context, vault balances, and Law programs are processed through a RISC-V zkVM to generate a zero-knowledge proof. This proof and the associated State Diff List are sent to the Base Layer for validation and final application.

![transaction_workflow.png](/img/transaction_workflow.png)
 
### Defining Local Laws
Local Laws are optional, and defined by the domain. A domain can declare their local laws by providing the Risc-V Proof Program Hash when declaring their [Executor Lease Agreement](/docs/docs/background/glossary#ela) during domain setup.

### Proof Aggregation
delta's proof program uses proof aggregation to maintain efficiency regardless of local law complexity. Local laws (if defined) are proven first. The resulting zk-proof is then validated as part of the global law proof program. As a result, any number or complexity of local laws compress to just a few bytes while remaining cryptographically secure. <br />
The resulting overall workflow is seen below:

![transaction_proving_workflow.png](/img/transaction_proving_workflow.png)

## Guide: Writing a Local Law
Local laws must be expressed as a program in order to be proven in a Risc-V zkVM. For example, if a domain wants to restrict activity to only users on a specific allowlist, this will be enforced by writing a program which asserts that each transaction message sender (and, optionally, transfer recipient) matches an address on the allowlist.


```rust title="Example code (for illustative purposes only): Enforce AllowList"
sp1_zkvm::entrypoint!(main);
use std::collections::HashSet;
pub fn main() {
    // Read inputs from the zkVM
    let sdl = sp1_zkvm::io::read::<Vec<u8>>();
    let _verifiables = sp1_zkvm::io::read::<[u8; 4]>();
    let verification_context = sp1_zkvm::io::read::<Vec<u8>>();

    // Parse allowlist and transactions from inputs
    let allowlist = parse_allowlist(&verification_context);
    let transactions = parse_transactions(&sdl);
    
    // Validate all signers are on the allowlist
    for transaction in &transactions {
        let signer_address = extract_signer_address(transaction);
        
        assert!(
            allowlist.contains(&signer_address),
            "Signer not on allowlist"
        );
    }

    // All transactions passed - commit the SDL
    sp1_zkvm::io::commit_slice(&sdl);
}
```
:::note
Our team can help translate your required local laws into provable programs. Please [contact us](/docs/docs/building/request-sdk-access) for more details.
:::
