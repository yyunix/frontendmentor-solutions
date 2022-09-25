import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Entertainment Web App - Frontend Mentor Challenge by @yyunix36
        </title>
        <meta
          name="description"
          content="Entertainment Web App created with Next.js, TypeScript, and TailwindCSS"
        />
      </Head>
      <Provider store={store}>
        {router.pathname === "/login" || router.pathname === "/signup" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
