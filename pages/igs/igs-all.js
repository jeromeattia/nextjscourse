import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { ALL_IGS_SOFT } from '../../constants/igs'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useQuery, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function getAllIgs() {
  const { loading, error, data } = useQuery(ALL_IGS_SOFT, {client: client})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return data.allGravitesNews.edges.map((elem ) => (
    <div key={elem.node.id}>
      <p>
        {elem.node.nom}{' '}{elem.node.prenom}
      </p>
    </div>
  ))
 
}
export default function IgsAll() {
  return ( 
    <ApolloProvider client={client}>
  <Layout>
    <Head>
      <title>IGS</title>
    </Head>
    <h1>Liste des IGS</h1>
    <h2>
      <Link href="/">
        <a>Maison</a>
      </Link>
    </h2>
    {getAllIgs()}


  </Layout>
  </ApolloProvider>
  )
 
}