---
title: The delta SDK
sidebar_label: 'The delta SDK'
sidebar_position: 3
---
# Introducing the delta SDK

If you’re building a domain from scratch, the delta SDK provides some basic building blocks to get you started with the asset infrastructure. The Executor SDK can be imported as a rust crate, and includes:

- **Cryptographic primitives:** tokens and NFTs, vaults and accounts, public/private keypairs and signatures
- **End-user operations:** token transfers, token mints and vault creation
- **Communication with the base layer:** balance queries, account queries

If you don't want to use Rust, we can provide **APIs compatible with other languages** (e.g. TypeScript) to access the most common operations: fetching vault data, minting new tokens, and debiting vaults. 
In the future, language support will expand beyond Rust to allow developers in different languages to work with the delta SDK directly.

delta integrations are designed to be beautifully simple, in order to allow domains to be maximally expressive. Beyond these simple SDK components, *domain designers are free to build whatever and however they want.*