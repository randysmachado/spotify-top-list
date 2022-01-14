import Artists from 'components/Artists'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Layout from 'components/Layout'
import Tracks from 'components/Tracks'

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Artists />
        <Tracks />
      </Layout>
      <Footer />
    </>
  )
}
