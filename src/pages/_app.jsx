import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spotify List | Randys Machado</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#181E30" />
        <meta
          name="description"
          content="A simple project to work with React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
