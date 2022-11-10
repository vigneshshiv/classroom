// Application
import Container from 'components/core/Container';
import Hero from 'components/common/Hero';
import Blog from './blog';

const Home = (): JSX.Element => {

  return (
    <Container customMeta={{ pageTitle: 'Vignesh Shivz' }}>
      <Hero image='/images/shiv-wave.png' height={400} width={400} />
      <Blog isBlogPage={false} />
    </Container>
  );
}

export default Home;
