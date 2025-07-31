---
title: Transactions on delta
description: Details on transaction types in domains and the delta base layer
sidebar_label: 'Transactions'
sidebar_position: 4
---

# Transactions on the delta Network

## Overview
Since delta is a two-layer system, there are several different transaction types depending on who the message sender and recipient is.

Domain application code and business logic may affect the message content, timing or execution for **user-level transactions**, which can be achieved by building upon one of the base user-level transaction types: **debitAllowance** and **tokenMint**.

Below is a summary of all transaction operations in the delta ecosystem.

| Transaction | Purpose | Message Sender | Message Recipient | Consensus |
|-------------|---------|----------------|-------------------|-----------|
| **debitAllowance** | Transfer tokens up to a signed amount from one vault to another | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Create tokenMint** | Issue a new token with the given parameters (including initial supply and recipient vaults) | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Increase Supply of a tokenMint** | Issue additional supply of an existing tokenMint to the given recipient vaults | Vault private key holder (user) | Domain Executor | Fast-path consensus |
| **Submit SDL** | Submit state updates to the base layer | Domain Executor | Chosen Validator | Fast-path consensus |
| **Submit Proof** | Submit cryptographic proof of state updates | Domain Executor | Chosen Validator | Fast-path consensus |
| **Submit ELA** | Register domain with the delta network | CLI | Chosen Validator | Epoch end transition |
| **Declare Validator** | Add new validator to consensus set | CLI | Chosen Validator | Epoch end transition |
| **Base Layer Migration** | Allows a user to forcefully migrate owned assets out of an unresponsive or malicious domain | Vault private key holder (user) | Chosen Validator | Epoch end transition |

## Using the CLI to submit transactions
:::note
Using the delta CLI requires [SDK Access](/docs/docs/building/request-sdk-access) and installation of the delta-cli registry
:::
The delta CLI tool can be used to submit transactions directly to a base layer validator (cannot be used for user-level transactions that occur in domains).

1. Save a JSON file with the transaction content
    ```json title="Example ELA Submission"
    {
        "type": "create_executor",
        "data": {
            "ela": {
                "executor": <ed25519 pubkey>,
                "executor_operator": <ed25519 pubkey>,
                "shard": <shard id>,
                "collateral": 100,
                "activation_epoch": 0,
                "deactivation_epoch": 999999,
                "lease_per_epoch": 0
            }
        }
    }
    ```
2. Use the CLI to submit the transaction data
    ```bash
    delta-cli submit --url <chosen validator address> \
    --keypair <path-to-keypair-json> \
    transaction_data.json
    ```
