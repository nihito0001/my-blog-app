import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginButton from "@/components/LoginButton";
import AccessToken from "@/components/AccessToken";
// const inter = Inter({ subsets: ["latin"] });
// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog App</title>
        <meta name="description" content="My Blog App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>My Blog App</h1>
          <p>
            <AccessToken />
          </p>
          <p>
            <LoginButton />
          </p>
        </div>
      </main>
    </>
  );
}
