import { useSession } from 'next-auth/react';
// Application
import Container from 'components/core/Container';

const Home = (): JSX.Element => {
  const { data: session, status } = useSession();
  console.log(`Session status - ${status}`);
  return (
    <>
    <h1>Home Page alteration with different props Outside</h1>
    <Container title='Classroom | Home' customMeta={
      { pageTitle: 'Vignesh Shiv' }
    }>
      <h1>Home Page alteration with different props</h1>
      <h2>Trying another way</h2>
    </Container>
    </>
  );
}

export default Home;
