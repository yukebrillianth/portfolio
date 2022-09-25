import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../../public/assets/fonts/stylesheet.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link href="/assets/fonts/stylesheet.css" rel="stylesheet" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
