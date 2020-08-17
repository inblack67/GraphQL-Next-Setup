import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache()
  })

  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
