import { CampaignData } from '@/types'
import { Connection, PublicKey } from '@solana/web3.js'
import { Program, AnchorProvider } from '@coral-xyz/anchor'
import { IPFS_BASE_URL } from '@/constants'

// You'll need to replace these with your actual program ID and IDL
import { IDL } from '@/idl/your_program'
const PROGRAM_ID = new PublicKey('Your_Program_ID_Here')

export async function getCampaignData(pda: string): Promise<CampaignData | null> {
  try {
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed')
    const provider = new AnchorProvider(
      connection,
      {
        publicKey: PublicKey.default,
        signAllTransactions: async (txs) => txs,
        signTransaction: async (tx) => tx,
      },
      { commitment: 'confirmed' }
    )
    const program = new Program(IDL, PROGRAM_ID, provider)

    const campaignAccount = new PublicKey(pda)
    const campaignData = await program.account.campaign.fetch(campaignAccount)

    if (!campaignData) {
      console.error('Campaign data not found')
      return null
    }

    return {
      orgName: campaignData.orgName,
      projectTitle: campaignData.title,
      description: campaignData.description,
      raised: campaignData.totalDonated.toNumber() / 1e9, // Convert lamports to SOL
      goal: campaignData.goal.toNumber() / 1e9, // Convert lamports to SOL
      imageLink: `${IPFS_BASE_URL}/${campaignData.projectImage}`,
      projectLink: campaignData.projectLink,
      pdaAddress: pda,
      startTimestamp: campaignData.startAt.toNumber() * 1000,
      endTimestamp: campaignData.endAt.toNumber() * 1000,
      donationCompleted: campaignData.donationCompleted,
      isClaimed: campaignData.claimed,
    }
  } catch (error) {
    console.error('Failed to fetch campaign data:', error)
    return null
  }
}