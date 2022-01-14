import { getSecrets } from '@netlify/functions'

import Artists from 'components/Artists'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Layout from 'components/Layout'
import Tracks from 'components/Tracks'

export default function Home({ artists, tracks }) {
  return (
    <>
      <Header />
      <Layout>
        <Artists artists={artists} />
        <Tracks tracks={tracks} />
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const secrets = await getSecrets()

  const artistsResponse = await fetch(
    'https://api.spotify.com/v1/me/top/artists?limit=10',
    {
      headers: {
        Authorization: `Bearer ${secrets.spotify.bearerToken}`
      }
    }
  )
  const { items: artists } = await artistsResponse.json()

  const tracksResponse = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?limit=10',
    {
      headers: {
        Authorization: `Bearer ${secrets.spotify.bearerToken}`
      }
    }
  )
  const { items: tracks } = await tracksResponse.json()

  return {
    props: { artists, tracks },
    revalidate: 24 * 60 * 60 * 1000
  }
}
