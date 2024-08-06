# Example Cypress usage with Page Objects

This repository has been created for Brite recruitment purpose and presented concepts are not unified. The goal of the implementation, was to blend different techniques and approaches,
so to present Proof Of Concept examples, with the real usage of code.

## Pre-requisites

- Installed `node` and `npm`. Code has been tested with the following setup:
```shell
❯ npm --version
10.7.0
❯ node --version
v20.15.0
```

## Guideline

1. Clone the repository to your local machine

2. After that, install the dependencies:

- Open terminal window and type commands:

```shell
cd \<your path to cloned repository\>
npm install
```
3. Framework is reday to be used with one of the `package.json` scripts or/and Cypress UI

- To open Cypress UI: `npm run launch:cy`
- To run all e2e tests in a headless mode: `npm run test:e2e`
- To run just first e2e test in two different browsers `npm run test:nicolas`
- To run all api tests `npm run test:api`

## Comment

- Custom Cypress Commands has been presented as a simple example with TypeScript usage `index.d.ts`
- Seems like upcoming movie tags has been removed from IMDb webpage (frst e2e task with Nicolas Cage). Instead we are picking up the first "In Production" movie
