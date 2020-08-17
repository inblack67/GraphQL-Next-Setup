import { useQuery, gql } from '@apollo/client'

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
