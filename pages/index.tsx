import { FC } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { props } from '../src/configs/Types'

import { authLink, httpLink } from '../src/configs/Api';
import { Schema } from '../src/configs/Schema'
import Main from '../src/components/Main'
const Home: FC<props> = ({ provider }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amine Addajou : Github Profil</title>
        <meta name="description" content="Profile Github" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css" />
        <script type="text/javascript" src="https://unpkg.com/react-vis/dist/dist.min.js"></script>
      </Head>

      <Main provider={provider} />
    </div>
  )
}


export async function getStaticProps() {

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: Schema
  });

  return {
    props:
    {
      provider: data.viewer
    }

  }
}


export default Home
