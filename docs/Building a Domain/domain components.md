---
title: Domain components
sidebar_label: 'Domain components'
sidebar_position: 3
---

# Components of a domain on delta

To build a domain on delta, there are three main elements of the system you’ll need to know well: the domain you’ll build, the executor that allows you to connect this domain to the base layer, and the shard that your domain will own.

1. **Domain**: a custom execution environment and all code related to it. This includes any frontend user interface, application code, optional custom local storage, and the executor.
2. **Executor**: the core component of a domain, which processes transactions and interacts with delta’s base layer. You can think of the executor as a domain’s “state machine." An executor is contains a few key parts: the domain’s custom RPC server, a sequencer of the domain’s choosing, and a runtime environment to coordinate everything.
3. **Shard:** The portion of delta’s global state which belongs to a given domain. Assets are stored in vaults on the shard, and these vault balances are updated by State Difference Lists (SDLs) and corresponding zk proofs sent from the domain to the base layer. The state of each shard is globally viewable, but vaults can only be debited by the owner domain to avoid state conflicts.
&nbsp;
&nbsp;

**Simplified view of a domain's main components**
![simplified view of a domain and delta](/img/delta_domains_simplified_view.png)

**Domain-centric view of the delta Network**
![domain-centric view of the delta Network](/img/delta_ecosystem_domain_view.png)

