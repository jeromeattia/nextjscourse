import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useQuery, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

 const PROTOCOLES = gql`
    query{
      allProtocoles(orderBy: CREATED_AT_DESC)
      {
      edges{
        node{
          id
          intervention
          }
        }
      }
    }
    `

 function ExchangeRates() {
    const { loading, error, data } = useQuery(PROTOCOLES, {client: client})
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    console.log(data)
    return data.allProtocoles.edges.map((elem ) => (
      <div key={elem.node.id}>
        <p>
          {elem.node.intervention}
        </p>
      </div>
    ))
  }

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <ApolloProvider client={client}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      {ExchangeRates()}
    </Layout>
    </ApolloProvider>
  )
}