import Head from 'next/head';
import Navbar from './Navbar' ;
import Footer from './Footer' ;
import { defaultMetadata } from '../utils/metadata';
// import { metadata } from '@/app/layout';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: any) {
  const metadata = children.props.metadata || defaultMetadata;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        {/*Open Graph Tags */}
        <meta property="og:title" content={metadata.title}></meta>
        <meta property="og:description" content={metadata.description}></meta>
        <meta property="og:image" content={metadata.image}></meta>
        <meta property="og:url" content={metadata.url}></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
