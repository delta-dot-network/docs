# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local development

use `nmp start` to launch the site locally in your browser

## Deployment

If you are adding a new page, ensure that it is accounted for in either sidebar.ts (if part of main docs) or sidebar-resources.ts (if a resource).
Test links on your local build first.

**Never develop actively on the github-pages branch.**

Use `npm run deploy` to deploy directly to the github pages branch and site.