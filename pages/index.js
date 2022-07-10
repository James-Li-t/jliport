import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Liのホムペーじ</title>
        <meta name="jliport" content="All about James Li" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.title}>JAMES LI</h1>
            <h1 className={styles.description}>welcome to my homepage</h1>
          </div>
          <div className="flex flex-row">
            <div>
              <a
                href="https://github.com/James-Li-t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.svg" className={styles.icon} />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/j4m3sli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.svg" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> About. </h1>
          <p className={styles.pgNormal}>
            I am James Li, well, at least for now.
          </p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> Projects. </h1>
          <p className={styles.pgNormal}>
            They say a man without duty is hollow, find purpose and find yourself.&nbsp; 
            <a href ='https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A'>This is purpose</a>
          </p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> Contact. </h1>
          <p className={styles.pgNormal}>
            Email: Jamesli28000@gmail.com
            <br/>Discord: jl#4037
          </p>
        </div>
      </main>
    </div>
  );
}
