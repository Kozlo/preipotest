import { http, createConfig } from 'wagmi'
import { holesky } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [holesky],
  multiInjectedProviderDiscovery: true,
  connectors: [
    // injected(),
    // coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID as string }),
  ],
  ssr: true,
  transports: {
    [holesky.id]: http(),
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
