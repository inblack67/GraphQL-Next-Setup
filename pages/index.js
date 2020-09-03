import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../src/apollo'

const IntroQuery = gql`
query IntroQuery {
  name,
  date
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(IntroQuery);

  if (loading) {
    return <h1>Loading...</h1>
  }

  const { name, date } = data;

  return (
    <div>
      <h1>
        {name}
      </h1>
      <h3>
        {date}
      </h3>
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