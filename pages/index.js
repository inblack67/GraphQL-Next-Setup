import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../utils/apollo'

const IntroQuery = gql`
query IntroQuery {
  name
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(IntroQuery);

  if (loading) {
    return <h1>Loading...</h1>
  }

  const { name } = data;

  return (
    <div>
      <h1>
        {name}
      </h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: IntroQuery
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}