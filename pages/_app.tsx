import "../styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyletronProvider value={styletron}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </StyletronProvider>
    </>
  );
}

export default MyApp;
