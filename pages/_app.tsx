import "../styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

import SEO from "../next-seo.config";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
