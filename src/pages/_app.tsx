import type { AppProps } from "next/app";
import { CryptoTrackerContextProvider } from "contexts/CryptoTrackerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CryptoTrackerContextProvider>
      <Component {...pageProps} />
    </CryptoTrackerContextProvider>
  );
}
