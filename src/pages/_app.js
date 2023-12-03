import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../../public/assets/fonts/stylesheet.css";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link href="/assets/fonts/stylesheet.css" rel="stylesheet" /> */}
      </Head>
      <ApolloProvider client={client}>
        <ClerkProvider {...pageProps} appearance={{
          variables: { colorPrimary: '#FF9800', fontFamily: "Inter", },
        }}>
          <Component {...pageProps} />
        </ClerkProvider>
      </ApolloProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
