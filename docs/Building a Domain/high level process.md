---
title: High-level process
sidebar_label: 'High-level process'
sidebar_position: 2
---

# High-level process for building a domain

The below process outlines at a high level the simplest way to build a domain and integrate it with delta. 

The delta Executor SDK comes equipped with all primitives from the Base SDK and some default options for integrating with the delta network. Customizations can always be added later (see [ADD LINK] for more details)
1. Install core components
    - delta Executor SDK ([contact us](mailto:helen@repyhlabs.com) for access)
    - Succinct [SP1](https://github.com/succinctlabs/sp1) (default configuration)
2. Build your domain
    - Create your custom code using primitives from delta’s SDK where needed
3. Create your domain’s Interface
    - Set up a simple RPC Server using industry-standard frameworks (we recommend using [Actix](https://actix.rs/docs/server/), [Axum](http://crates.io/crates/axum-connect) or [Rouille](https://github.com/tomaka/rouille))
4. Configure your domain
    - Set up your domain’s identity (keypair and Shard ID)
    - Connect your domain RPC to repyh runtime (included with the Executor SDK), and runtime RPC client to a chosen base layer validator
5. Go live!