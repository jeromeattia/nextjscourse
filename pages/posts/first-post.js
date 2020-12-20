import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return ( 
  <Layout>
    <Head>
      <title>Premier loustic</title>
    </Head>
    <h1>Jerome</h1>
    <h2>
      <Link href="/">
        <a>Maison</a>
      </Link>
    </h2>

  </Layout>
  )
 
}
