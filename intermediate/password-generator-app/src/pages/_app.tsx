import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Password Generator - Frontend Mentor Challenge by @yyunix36
        </title>
        <meta
          name="description"
          content="Password Generator created with Next.js, TypeScript, and TailwindCSS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
