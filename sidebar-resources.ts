import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// sidebar config for secondary docs instance

export default {
    resources: [
        {
            type: "doc",
            id: "index",
            label: "Resources",
        },
        {
            type: "doc",
            label: "Request SDK Access",
            id: "request-sdk-access",
        },
    ],
}