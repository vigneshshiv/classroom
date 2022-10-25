import { useSession } from 'next-auth/react';
// Application
import Container from 'components/core/Container';
import Title from 'components/title/Title';
import Blog from './blog';

const Home = (): JSX.Element => {
  const { data: session, status } = useSession();
  console.log(`Session status - ${status}`);
  return (
    <>
    <h1>Home Page alteration with different props Outside</h1>
    <Container customMeta={{ pageTitle: 'Vignesh Shivz' }}>
      <Title title='Home Page is in-progress...' />
      <Blog isBlogPage={false} />
    </Container>
    </>
  );
}

export default Home;
