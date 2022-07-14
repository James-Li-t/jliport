import Head from "next/head";
import Link from "next/link";
import stMain from "../../styles/Home.module.css";
import Header from "../../components/header.js";
import styles from "../../styles/Journal.module.css";

export default function Journal() {
  return (
    <div className={stMain.container}>
      <Head>
        <title>Journal</title>
        <meta name="jlihub" content="All about James Li" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={stMain.main}>
        <Header />
        <div>
          <h1 className={stMain.subheader}>WIP</h1>
        </div>
      </main>
    </div>
  );
}
