---
title: Vaults and Accounts on delta
description: Overview of vaults and the delta account model
sidebar_label: 'Vaults'
sidebar_position: 3
---

# Accounts and Vaults on the delta Network
:::info
Coming soon: **Escrow Vaults**, **Passkey** Account Recovery, **Multi-Sig** Vaults
:::
## Overview
**Vaults** exist on domains, and are identified by a **pubkey** and the domain's [**shard ID**](/docs/docs/background/glossary#shard) to make up the **Vault ID**. 

Activity on domains is centered around vaults, and all user-level transactions which make up a SDL involve vaults.

### Token Holding Vaults (User Vaults) {#vaults}
The most common type of vault is a tokenHoldings vault.
- Creation of a tokenHoldings vault is implicit. Whenever a new pubkey receives tokens on the domain, a tokenHoldings vault will be created for that VaultID.
- A valid signature from the vault's associated private key is required to debit from the vault
- tokenHoldings vaults can contain any number of fungible and non-fungible tokens

```rust title="token holdings data struct"
pub struct TokenHoldings {
    /// A mapping from (fungible) token IDs to their respective balances in plancks.
    fungibles: HashMap<TokenId, Planck>,
    /// A mapping fron NFT token ids to their respective holdings, that is, a
    /// set of collectibles in the collection issued by the given token id.
    nfts: HashMap<TokenId, nft::Holdings>,
}

```
### Additional Vault Types
[TokenMint Vaults](/docs/docs/background/tokens#token-mints) hold information about tokens (instead of the tokens themselves).

TokenMints are structured as vaults due to the fact that they are affected by user-level transactions on domains similarly to tokenHoldings vaults.

### Accounts
:::note
Subject to change. Below details represent v0.5 design.
:::
An **Account** is represented by a pubkey.
- Each account can have one tokenHolding vault per domain
- TokenHolding vaults owned by the same account will all share the same pubkey as part of the Vault ID
- Transferring funds between vaults owned by the same account is a native transaction, which makes interop between domains seamless