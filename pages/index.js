import Cover from '../components/Cover'
import Information from '../components/Information'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>asmeydan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Cover />
      <Information />
    </Layout>
  )
}
