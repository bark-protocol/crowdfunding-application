![Banner](screenshots/screenshot.png)

# BARK Protocol: Solana-Based Crowdfunding Platform

**Prototype**

Welcome to the BARK Crowdfunding GitHub repository! This repository contains the codebase and documentation for our decentralized crowdfunding platform built on the Solana blockchain. BARK Protocol provides a secure, scalable, and user-friendly solution for fundraising, leveraging Solana’s high-performance capabilities.

---

## 🌟 Overview

BARK | Crowdfunding dApp is designed to enhance the efficiency, security, and transparency of fundraising campaigns. It supports multi-currency contributions, integrates decentralized storage solutions, and employs advanced analytics and AI logic for real-time decision making.

---

## 🚀 Key Features

- **User-Friendly Interface**: Built with React.js, Next.js, Tailwind, and Shadcn.
- **Solana Blockchain Integration**: Fast, low-cost transactions.
- **SUI Network Compatibility**: Supports scalable smart contracts and cross-chain logic.
- **Secure Donations**: Transparent and immutable via blockchain.
- **Automated Token Minting**: Fundraiser tokens are minted and distributed to donors.
- **Digital Fund Receipts**: Non-custodial proof of donation.
- **Decentralized Storage**: Arweave/IPFS for tamper-proof metadata and media.
- **Real-Time Oracles**: Powered by Chainlink and Pyth for live financial and supply chain data.
- **Wallet Integration**: Phantom, Backpack, Solflare, and others.
- **Solana Pay Integration**: Seamless QR code-based payments.
- **Multi-Currency Support**: Accepts BARK, SOL, USDC, and other SPL tokens.
- **BARK Token Factory**: Easily create and distribute custom SPL tokens for each campaign.
- **AI-Powered Dashboard**: Insights from campaign performance, donation behavior, and forecasting.
- **Embedded Payment Widget**: Lightweight donation module for third-party embedding.
- **AI Chat Agents**: Conversational support for campaign managers and donors.
- **Governance**: On-chain decision-making for community-driven upgrades.

---

## 🏗️ Architecture

### Main Components

1. **Frontend**:
   - Built in React, Tailwind, and Shadcn.
   - Interacts with blockchain via Solana Web3.js and Solana Pay.

2. **Backend / Smart Contracts**:
   - Written in Anchor for Solana and Move for SUI.
   - Includes token factory, escrow logic, and governance.

3. **Storage**:
   - IPFS/Arweave for campaign metadata, images, and videos.

4. **Payments & Tokens**:
   - Solana Pay, Token Program, and custom BARK Web3 Payment Gateway.

5. **Oracle Integrations**:
   - **Chainlink** for supply chain, disaster alerts, weather.
   - **Pyth** for live price feeds and financial data.

6. **Analytics Layer**:
   - Real-time campaign insights, fraud detection, and prediction models via integrated AI.

7. **AI Agent & Chat**:
   - Custom agents using OpenAI or OSS LLMs for:
     - Campaign help
     - Transaction assistance
     - Donor support

8. **Cross-Chain & Network Support**:
   - **Solana**: Devnet, Testnet, Mainnet.
   - **SUI**: For scalable contract interactions.

---

## 📌 Use Cases

- **Charity & Non-Profits**: Real-time campaign tracking, impact reporting.
- **Disaster Relief**: Fast, transparent response funding.
- **Healthcare Crowdfunding**: Verified wallets and use of funds.
- **Humanitarian Crisis Aid**: Transparent logistics and delivery tracking via oracles.
- **Startup Launchpads**: Community-driven seed funding with token incentives.
- **Creative Projects**: Raise funds with instant reward minting.
- **Local Community Projects**: Easy onboarding and payment via wallet or QR.

---

## 📸 Screenshots

![screenshot](./frontend/assets/screenshot1.png)
![screenshot](./frontend/assets/screenshot2.png)
![screenshot](./frontend/assets/screenshot3.png)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js
- Solana Wallet (Phantom, Backpack, Solflare)
- Arweave or IPFS credentials (e.g. Pinata)
- Solana CLI, Anchor CLI
- RPC URLs (Helius, QuickNode, or Alchemy)

### Environment Variables

Rename `.env.local.example` to `.env.local` and set:

```env
NEXT_PUBLIC_MAINNET_PROGRAM_ID=
NEXT_PUBLIC_DEVNET_PROGRAM_ID=
NEXT_PUBLIC_SHYFT_IPFS_PROJECT_ID=
NEXT_PUBLIC_SHYFT_IPFS_PROJECT_SECRET=
NEXT_PUBLIC_SHYFT_API=
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_CLIENT_SECRET=
NEXT_PUBLIC_PROVIDER_URL=
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io
NEXT_PUBLIC_MINT_API_URL=https://api.actions.barkprotocol.net/mint
NEXT_PUBLIC_HELIUS_RPC_URL=https://mainnet.helius-rpc.com/?api-key=your_key
PINATA_JWT=
ALCHEMY_SOLANA_MAINNET=
ALCHEMY_SOLANA_DEVNET=
NEXT_PUBLIC_REDIRECT_URL=http://localhost:3000/callback
NEXT_PUBLIC_OPENID_PROVIDER_URL=https://accounts.google.com/.well-known/openid-configuration
NEXT_PUBLIC_FULLNODE_URL=https://fullnode.testnet.solana:443
NEXT_PUBLIC_PACKAGE_ID=
````

---

## 🧠 AI & Agent Integrations

* AI-powered dashboard widgets.
* Chatbot agents for:

  * Donor FAQs
  * Campaign creation
  * Status tracking
* Planned integrations:

  * OpenAI
  * HuggingFace LLMs
  * LangChain

---

## 🧪 Smart Contracts

Navigate to the `contract/` folder to test and deploy:

```bash
cd contract
anchor test
anchor build
anchor deploy
```

View your program:

[Solana Testnet Explorer](https://solscan.io/testnet/BARK36EnfrDah5j5r1Rw9ZMkv3i4Q3XUGBZjGixaZT43)

Program ID (Dev):
`BARK36EnfrDah5j5r1Rw9ZMkv3i4Q3XUGBZjGixaZT43`

---

## 🛠️ Running the App

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000)

---

## 📤 Deployment

Easily deploy via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

## 🤝 Contributing

We welcome your ideas, pull requests, and feedback.
Check the [CONTRIBUTING.md](CONTRIBUTING.md) for setup.

---

## 📜 License

MIT License – see [LICENSE](LICENSE).

---

## 📢 Disclaimer

This project is for educational and prototype purposes. Always consult with legal and financial professionals before launching crowdfunding campaigns using smart contracts.

---

## 📚 Learn More

* [Next.js Docs](https://nextjs.org/docs)
* [Solana Pay](https://solana.com/pay)
* [Chainlink Docs](https://docs.chain.link)
* [Pyth Network](https://pyth.network/)
* [Helius RPC](https://www.helius.xyz/)
* [SUI Network](https://docs.sui.io/)
