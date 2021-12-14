import Document, { Html, Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
//@ts-ignore
import { styletron } from "../styletron";

import { GOOGLE_ANALYTICS } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(context) {
    const renderPage = () =>
      context.renderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props: any) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    });
    const stylesheets = styletron.getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {
            //@ts-ignore
            this.props.stylesheets.map((sheet, i) => (
              <style
                className="_styletron_hydrate_"
                dangerouslySetInnerHTML={{ __html: sheet.css }}
                media={sheet.attrs.media}
                data-hydrate={sheet.attrs["data-hydrate"]}
                key={i}
              />
            ))
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
