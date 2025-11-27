// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// sidebar config for main docs instance


module.exports = {
  docs: [
    {
      type: "doc",
      id: "welcome",
      label: "Welcome",
    },
    {
      type: "html",
      value:
        '<h4 class="sidebar-heading">LEARN <span class="sidebar-heading-divider"></span></h4>',
      defaultStyle: true,
    },
    // {
    //   type: "doc",
    //   id: "learn/architecture-overview",
    //   label: "Architecture Overview",
    // },
    {
      type: "category",
      label: "Core Concepts",
      items: [
        // {
        //   type: "doc",
        //   label: "Domains and Shards",
        //   id: "learn/domains-shards",
        // },
        {
          type: "doc",
          label: "Vaults and Accounts",
          id: "learn/vaults",
        },
        {
          type: "doc",
          label: "delta Primitives",
          id: "learn/primitives",
        },
        {
          type: "doc",
          label: "zk Proving and Global Laws",
          id: "learn/zkp-global-laws",
        },
        {
          type: "doc",
          label: "Local Laws",
          id: "learn/local-laws",
        },
        {
          type: "doc",
          label: "Tokens and Token Laws",
          id: "learn/token-laws",
        },
      ],
    },
    {
      type: "category",
      label: "How delta Works",
      items: [
        // {
        //   type: "doc",
        //   label: "Transaction Lifecycle",
        //   id: "learn/transaction-lifecycle",
        // },
        // {
        //   type: "doc",
        //   label: "Domain to Base Layer Communication",
        //   id: "learn/rpc-communication",
        // },
        {
          type: "doc",
          label: "Proof Lifecycle",
          id: "learn/proof-lifecycle",
        },
        // {
        //   type: "doc",
        //   label: "Multi-Domain Interoperability",
        //   id: "learn/interop",
        // },
      ],
    },
    // {
    //   type: "doc",
    //   label: "Key Differentiators",
    //   id: "learn/key-differentiators",
    // },
    {
      type: "doc",
      label: "Domain Use Cases",
      id: "learn/domain-use-cases",
    },
    {
      type: "html",
      value:
        '<h4 class="sidebar-heading">BUILD <span class="sidebar-heading-divider"></span></h4>',
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "The Domain SDK",
      id: "build/domain-sdk",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          label: "Setup and Prerequisites",
          id: "build/setup",
        },
        {
          type: "doc",
          label: "Tutorial",
          id: "build/tutorial",
        },
      ],
    },
  ],
}