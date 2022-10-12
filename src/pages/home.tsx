import Page from 'components/core/Page'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Online Classroom</title>
      </Head>
      <Page>
        {/* <h1 className="p-10 text-red-500">Hey Starting classroom from today!, What about CSS?</h1> */}
      </Page>
    </div>
  );
}

export default Home;
