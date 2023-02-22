import { type NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3 - Notes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
