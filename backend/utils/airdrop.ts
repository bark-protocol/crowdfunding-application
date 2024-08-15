import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

/**
 * Airdrops SOL to a specified public key.
 * @param publicKey - The public key to which SOL will be airdropped.
 * @param amount - The amount of SOL to be airdropped in lamports.
 */
export async function airdropSol(publicKey: PublicKey, amount: number): Promise<void> {
  try {
    const provider = anchor.getProvider();
    const airdropTx = await provider.connection.requestAirdrop(publicKey, amount);
    await confirmTransaction(airdropTx);
  } catch (error) {
    console.error("Failed to airdrop SOL:", error);
    throw error;
  }
}

/**
 * Confirms a transaction on the Solana blockchain.
 * @param tx - The transaction signature to be confirmed.
 */
export async function confirmTransaction(tx: string): Promise<void> {
  try {
    const provider = anchor.getProvider();
    const latestBlockHash = await provider.connection.getLatestBlockhash();

    await provider.connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: tx,
    });
  } catch (error) {
    console.error("Failed to confirm transaction:", error);
    throw error;
  }
}
