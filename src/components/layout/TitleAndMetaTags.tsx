/**
 * Title and Meta Tags
 */
import Head from 'next/head';

const TitleAndMetaTags = ({ customMeta }: { customMeta?: any }) => {
  const meta = {
    title: 'Online Classroom',
    description: `Online Classroom app with built-in Live video streaming and integrated Data Storage with AWS`,
    type: 'website',
    url: 'https://onlineclassroom.com',
    image: '/site.png',
    ...customMeta
  };
  const title = meta.pageTitle ? `${meta.pageTitle} | ${meta.title}` : meta.title;
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content={meta.description} name="description" />
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={meta.url} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image ?? '/site.png'} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:site" content="vikyshiv" />
      <meta name="twitter:creator" content="vikyshiv" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image ?? '/site.png'} />
      <meta
        name="keywords"
        content="Online Classroom, Classroom, Project based learning, Crash course"
      />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
}

export default TitleAndMetaTags;