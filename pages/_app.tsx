import "../styles/globals.css";

import type { AppProps } from "next/app";

import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
  return <MoralisProvider
  appId="Ule3vKGffPvCeljv5O1GMC28a3A7OGebTRQZmDhG"
  serverUrl="https://e7e8lhnsdker.usemoralis.com:2053/server"
> <Component {...pageProps} />
    </MoralisProvider>;
}
export default MyApp;
