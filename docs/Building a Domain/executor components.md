---
title: Executor components
sidebar_label: 'Executor components'
sidebar_position: 4
---


# Components of an executor


 The Executor is responsible for processing transactions and communicating them to the delta Base Layer. It is part of the domain and comprised of:
 - Domain RPC Server
    Every domain requires a custom RPC server for user transactions and operations occurring on the domain to be communicated to the Runtime and eventually delta’s Base Layer. 
    The domain RPC server is not included in the executor template and must be set up separately (we recommend using a Rust framework like [Actix](https://actix.rs/docs/server/), [Axum](http://crates.io/crates/axum-connect), [Rouille](https://github.com/tomaka/rouille)).
 - Sequencer
    Domains on delta are free to use any sequencer they prefer. User transactions and operations on the domain must be ordered in some way before being passed to the Runtime.
    The delta Executor SDK includes a simple “first in, first out” sequencer as a default which can be used for simple implementations.
 - Runtime
    The runtime manages the execution, packaging, and communication of user transactions. 
    The Executor SDK includes the default repyh runtime, which consists of a basic execution trait (customizable), SP1 proving trait (customizable), code to transform processed user transactions into SDLs, and a RPC client to connect to the gRPC on the base layer. It is recommended that teams use the repyh runtime and optionally customize the execution and proving traits to suit their needs (more detail below).

<details>
    <summary>Customization Points</summary>
    - Domain RPC Server
        - Domain developers will set up their own custom RPC server for the domain
        - the domain RPC will intake user transactions from the domain, order them via the chosen sequencer and transmit the ordered list to the runtime to handle execution and creation/submission of SDLs
    - Sequencer
        - Domain developers can use any sequencer model
        - The sequencer will be called by the domain RPC to order user transactions occurring on the domain
    - `Execution` Trait (part of the Runtime)
        - The Executor SDK includes a `FullDebitExecutor` which
            - intakes an ordered list of user transactions (called `verifiables` in the code)
            - executes these
            - returns the `AggregatedStateDiff` (diffs for the related vaults because of the transactions)
        - Domain developers can define their own custom `Execution` traits to enable more complex handling logic for transactions and SDL submissions.
    - `Proving` Trait (part of the Runtime)
        - The Executor SDK includes a default `Proving` trait which
            - assumes a local CPU installation of SP1
            - passes the SDL `HashDigest` along with the `Verifiables` and `Context`
            - returns the `SDLProof`
        - Domain developers can define their own `Proving` trait if they prefer to use a different prover setup.
</details>

![detailed domain-centric view of the delta network](/img/domain_components_detailed.png)
 
