import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RenderRouters } from './router';
import {
  RecoilRoot,
} from 'recoil';
export default function App() {
  return (
    <RecoilRoot>
      {/* <RainbowKitProvider chains={chains}> */}
      <BrowserRouter>
        <Suspense>
          <RenderRouters />
        </Suspense>
      </BrowserRouter>
      {/* </RainbowKitProvider> */}
    </RecoilRoot>
  );
}
