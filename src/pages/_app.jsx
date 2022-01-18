import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spotify List | Randys Machado</title>
        <link rel="shortcut icon" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#181E30" />
        <meta name="description" content="List Spotify | Randys Machado" />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
