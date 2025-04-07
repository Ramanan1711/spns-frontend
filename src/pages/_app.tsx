import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';  // Remove /client
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider user={pageProps.user}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
