import Head from "next/head";
import Link from "next/link";
import stMain from "../../styles/Home.module.css";
import Header from "../../components/header.js";
import Footer from "../../components/footer";
import styles from "../../styles/Journal.module.css";
import Pdata from "../../public/posts.json";

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
          <div className="grid gap-10 grid-flow-row grid-cols-2 ">
            {Pdata.map((p) => (
              <div key={p.id} className={styles.card}>
                <h1 className={styles.title}> {p.title}</h1>
                <p className={styles.description}>{p.desc}</p>
                <div className="mt-auto flex flex-row items-end justify-between">
                  <h1 className={styles.date}> {p.date}</h1>
                  <Link href={p.link}>
                    <div className="mx-8">
                      <button className={styles.read}>Read</button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
