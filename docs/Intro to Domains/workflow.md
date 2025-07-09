---
title: Example workflow
sidebar_label: 'Example workflow'
sidebar_position: 2
---

# Example domain application workflow

Domains are incredibly flexible - delta only impacts the settlement process when there’s an asset you want to track on the global network.

1. A customer finds your application and decides to try your product. They sign-up with Google, email, apple, or whatever your application uses. As part of onboarding, the user will register a passkey which will serve as their delta keypair in the future.
2. When the customer starts a transaction that your application wants to settle on delta, the domain executor will draft a transaction message and have the user sign it with their passkey locally (just like apple pay). If it was the user’s first touchpoint to delta, a vault will be automatically created for them using the keypair of the passkey.
3. The signed transaction is applied locally immediately. 
4. The domain code decides when to settle all local changes to delta: signed user transactions, the aggregated changes, and other context is used to create a SP1 proof. The state difference list and proof are sent to delta via the domain’s chosen validator, which will start the consensus process immediately (no global ordering of SDLs to slow you down).
5. delta updates the global asset cloud.

![domain workflow diagram](/img/domain_workflows.png)