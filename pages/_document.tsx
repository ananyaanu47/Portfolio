import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 
  render() {
    return (
      <Html lang='en' >
        <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
            </Head>
        <body className ="bg-gradient-to-r from-blue-400 to-pink-400 dark:from-dark-500 to dark-700">

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument