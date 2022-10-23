/**
 * Container Component
 */
import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type props = {
  children: ReactNode;
  customMeta: any;
}

const Container = ({ children, customMeta }: props) => {
  const router = useRouter();
  const meta = {
    title: 'Online Classroom',
    description: `Online Classroom app with built-in Live video streaming and integrated Data Storage with AWS`,
    type: 'website',
    image: '/site.png',
    ...customMeta
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://onlineclassroom.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://onlineclassroom.com/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image ?? '/site.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vikyshiv" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image ?? '/site.png'} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="container mx-auto px-12 sm:px-0">{children}</main>
    </>
  );
}

export default Container;