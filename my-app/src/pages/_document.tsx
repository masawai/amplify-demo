import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://d2mpvn8z9vgh9g.cloudfront.net/lex-web-ui-loader.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
          var loaderOpts = {
            baseUrl: 'https://d2mpvn8z9vgh9g.cloudfront.net/',
            shouldLoadMinDeps: true
          };
          var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
          var chatbotUiConfig = {
                  /* Example of setting session attributes on parent page
                  lex: {
                    sessionAttributes: {
                      userAgent: navigator.userAgent,
                      QNAClientFilter: ''
                    }
                  }
                  */
                };
          loader.load(chatbotUiConfig)
            .catch(function (error) { console.error(error); });
            `
        }} />
      </body>
    </Html>
  )
}
