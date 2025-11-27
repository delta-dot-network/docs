---
title: Setup and Prerequisites
---

# Prerequisites

###  Base Dependencies

To complete this tutorial and work with the delta Domain SDK, you'll need the following:

- [Rust and Cargo Installed](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- A terminal

### delta Dependencies

Our testnet is currently available to trusted partners. The delta team should have provided you with the following:

- An authentication token for delta's crate registry
- A pre-seeded base layer keypair and shard ID
- A delta testnet validator endpoint

If you have not yet been onboarded by the delta team and provided with these resources, please [request access](../../resources/request-sdk-access) or reach out to your delta contact.

### Cargo Configuration

To add the delta registry to your global [cargo configuration](https://doc.rust-lang.org/cargo/reference/config.html), the following lines should be added to your `~/.cargo/config.toml` file:

```toml
[registries.delta]
index = "sparse+https://crates.repyhlabs.dev/api/v1/crates/"
credential-provider = ["cargo:token"]
token = "your authentication token"
```

Alternatively, you can log in temporarily using only the terminal by running

```bash
cargo login --registry delta \
  --index "sparse+https://crates.repyhlabs.dev/api/v1/crates/" \
  <your-authentication-token>
```

Once access the delta crates is configured and base dependencies are installed, you can start working with the delta testnet and example tools.