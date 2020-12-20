import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return ( 
  <>
    <Head>
      <title>Premier loustic</title>
    </Head>
    <h1>Jerome</h1>
    <h2>
      <Link href="/">
        <a>Maison</a>
      </Link>
    </h2>

  </>
  )
 
}
