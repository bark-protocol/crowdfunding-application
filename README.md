![Banner](.github/assets/github-banner.png)

# BARK Protocol: Solana-Based Crowdfunding Platform Monorepo
**Prototype**

Welcome to the BARK Protocol GitHub repository! This repository contains the codebase and documentation for our decentralized crowdfunding platform built on the Solana blockchain. The BARK Protocol aims to provide a secure, scalable, and user-friendly solution for fundraising, leveraging the high-performance capabilities of Solana.

## Overview

The BARK Protocol is a decentralized crowdfunding platform that enhances the efficiency, security, and transparency of fundraising campaigns. Built on Solana, our platform supports multi-currency contributions, integrates decentralized storage solutions, and employs advanced security measures to ensure a trustworthy experience for users and campaign creators.

### Key Features

- **Solana Blockchain Integration:** Utilizes the high-performance Solana blockchain for fast and secure transactions.
- **Secure Donations:** Donations are made securely using blockchain technology, ensuring transparency and immutability.
- **Automated Token Minting:** Fundraiser tokens are automatically minted and distributed to donors as proof of contribution.
- **Digital Fund Receipts:** Donors receive digital receipts for their contributions, maintaining a verifiable record of transactions.
- **Decentralized Storage:** Employs Arweave/IPFS for durable and censorship-resistant data storage.
- **Smart Contracts:** Automates fundraising processes and enforces campaign rules using Solana's native programming language.
- **Cross-Chain Functionality:** Integrates Chainlink and PYTH oracles for real-world data integration and enhanced functionality.
- **User-Friendly Frontend:** Built with React.js, providing an intuitive interface for campaign management and donation processing.
- **Wallet Integration:** Supports Solana-compatible wallets for secure authentication and transactions.
- **Solana Pay Integration:** Facilitates seamless and secure payments through Solana Pay for efficient donation processing.

## Architecture

### Components

1. **Frontend (React.js):**
   - Dynamic user interfaces for campaign management and donation processing.
   - Integration with Solana Web3.js and Solana Pay API for blockchain interactions and payment processing.

2. **Backend (Solana Blockchain):**
   - High-performance blockchain network handling transactions and program execution.
   - Smart contracts (programs) written in Solana’s native language for campaign automation.

3. **Decentralized Storage:**
   - **Arweave/IPFS:** Secure storage for campaign metadata and media files.

4. **APIs and SDKs:**
   - **Solana Web3.js:** Facilitates interaction between the frontend and the Solana blockchain.
   - **Solana Pay API:** Provides secure and efficient payment processing capabilities.
   - Third-party APIs for additional functionalities such as identity verification and data aggregation.

5. **Security Components:**
   - **Encryption:** End-to-end encryption for data security.
   - **Authentication:** Secure wallet-based authentication methods.

6. **Oracles and External Integrations:**
   - **Chainlink:** Provides decentralized oracles for real-world data.
   - **PYTH:** Delivers high-fidelity financial market data.

7. **Governance:**
   - Community-driven governance mechanisms for protocol upgrades and policy changes.

8. **Monitoring and Analytics:**
   - Tools for tracking blockchain performance and analyzing user interactions.

### Architecture Diagram

![Architecture Diagram](.github/assets/architecture-diagram.png)

## Use Cases

- **Charity Fundraising:** Non-profits can leverage BARK Protocol for transparent and efficient fundraising, ensuring that donations are used effectively.
- **Project Funding:** Startups and projects can raise funds while providing immediate liquidity for their tokens, enhancing their market presence.
- **Community Initiatives:** Community-driven projects can benefit from automated and transparent fundraising mechanisms.

![screenshot](./frontend/assets/screenshot1.png)
![screenshot](./frontend/assets/screenshot2.png)
![screenshot](./frontend/assets/screenshot3.png)

## Getting Started

To get started with the BARK Protocol, follow the instructions below:

### Prerequisites

- **Node.js:** Ensure you have Node.js and npm installed.
- **Solana-Compatible Wallet:** For interacting with the blockchain.
- **Arweave/IPFS Access:** For decentralized storage.
- **Solana Pay Integration:** Set up for handling payments.

### Environment Variables

Rename the file `env.local.example` to `env.local` and add the required environment variables in the file:

```
NEXT_PUBLIC_MAINNET_PROGRAM_ID=
NEXT_PUBLIC_DEVNET_PROGRAM_ID=
NEXT_PUBLIC_SHYFT_IPFS_PROJECT_ID=
NEXT_PUBLIC_SHYFT_IPFS_PROJECT_SECRET=
NEXT_PUBLIC_SHYFT_API=
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_CLIENT_SECRET=
NEXT_PUBLIC_PROVIDER_URL=

PINATA_JWT=
ALCHEMY_SOLANA_MAINNET=
ALCHEMY_SOLANA_DEVNET=

NEXT_PUBLIC_REDIRECT_URL=http://localhost:3000/callback
NEXT_PUBLIC_OPENID_PROVIDER_URL=https://accounts.google.com/.well-known/openid-configuration
NEXT_PUBLIC_FULLNODE_URL=https://fullnode.testnet.solana:443
NEXT_PUBLIC_PACKAGE_ID=
```

### Running the App

Start the development server:

```bash
npm run dev
```

### Interacting with the Program

Navigate to the program directory:

```bash
cd contract
```

### Testing the Program

Run tests using:

```bash
anchor test
```

### Compiling the Program

Build the smart contract:

```bash
anchor build
```

### Deploying the Program

Publish the smart contract:

```bash
anchor deploy
```

## Program ID

**Test Account**: 32Qg9Pybde94crQEU8GaoBbhsMtjm2uer3MJZKLDbvHe

### Solana Testnet Explorer

View the program on the Solana Testnet Explorer:

```
https://solscan.io/testnet/32Qg9Pybde94crQEU8GaoBbhsMtjm2uer3MJZKLDbvHe
```

## Contributing

We welcome contributions to the BARK Protocol! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

The information provided in this repository is for informational purposes only and does not constitute financial, legal, or investment advice. Participants should seek professional guidance before engaging with the BARK Protocol platform. Participation involves risks including market volatility and regulatory changes. By using our platform, you acknowledge and accept these risks.

### NEXT.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.