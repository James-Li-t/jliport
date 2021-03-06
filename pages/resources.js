import Head from "next/head";
import Link from "next/link";
import stMain from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Journal.module.css";

export default function Hub() {
  return (
    <div className={stMain.container}>
      <Head>
        <title>Resources</title>
        <meta name="jlihub" content="All about James Li" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={stMain.main}>
        <Header />
        <div className="animate-fadein">
          <h1 className={stMain.subheader}>WIP</h1>
        </div>
      <Footer/>
      </main>
    </div>
  );
}
