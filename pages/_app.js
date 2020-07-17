import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { SWRConfig } from "swr";
import { getHome } from "../hooks/use-home";
import { getProfile } from "../hooks/use-profille";
import { getAbout } from "../hooks/use-about";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <a onMouseEnter={() => getHome()}>Home</a>
        </Link>
        <Link href="/about">
          <a onMouseEnter={() => getAbout()}>About</a>
        </Link>
        <Link href="/profile">
          <a onMouseEnter={() => getProfile()}>Profile</a>
        </Link>
      </div>
      <SWRConfig>
        <div style={{ marginTop: "2rem" }}>
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </div>
  );
}
