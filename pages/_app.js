import '../styles/globals.css';
import {ApolloProvider} from "@apollo/client";
import {client} from "../src/apolloClient/client";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-406986847"></Script>
          <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                  __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-406986847', {
                        page_path: window.location.pathname,
                        });
                        gtag('event', 'conversion', {'send_to': 'AW-406986847/hN6sCKy2zfoBEN_AiMIB'});
                        console.log('Google Tag Manager has been loaded.');
                        `,
              }}
          ></Script>
      <ApolloProvider client={client}>
          <Component {...pageProps} />
      </ApolloProvider>
      </>
  );
}

export default MyApp
