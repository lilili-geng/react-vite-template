import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RenderRouters } from './router';
// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import {
  RecoilRoot,
} from 'recoil';

// const chains = [arbitrum, mainnet, polygon]
// const projectId = '407604896f292eb30f1c6e8df2e3d620'

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function App() {
  return (
    // <WagmiConfig config={wagmiConfig}>
    <RecoilRoot>
      {/* <RainbowKitProvider chains={chains}> */}
      <BrowserRouter>
        <Suspense>
          <RenderRouters />
        </Suspense>
      </BrowserRouter>
      {/* </RainbowKitProvider> */}
    </RecoilRoot>
    //   <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    // </WagmiConfig>
  );
}
