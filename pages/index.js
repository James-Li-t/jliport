import Script from "next/script";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
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
        <Header />
        <div className="animate-fadein">
          <div className={styles.section}>
            <h1 className={styles.subheader}> About. </h1>
            <p className={styles.pgNormal}>
              Yo! I am James Li, currently a University Student with
              interests/passions regarding anything in the computer science
              space (currently focusing on Web Development using React.js). I
              also have interests in digital content creation, such as video
              editing, motion design etc. My hobbies include gaming, VTubers,
              eating out, and going on urban adventures around my city! 🗿
            </p>
          </div>
          <div className={styles.section}>
            <h1 className={styles.subheader}> Notable Projects. </h1>
            <ul className={styles.lsNormal}>
              <li>
                {" "}
                Utility bot for the online messaging platform Discord{" "}
                <a
                  href="https://github.com/James-Li-t/railgunbot"
                  className={styles.links}
                >
                  {" "}
                  [REPO]{" "}
                </a>
              </li>
              <ul className={styles.slsNormal}>
                <li>
                  {" "}
                  Written in python using the discord.py library, hosted on
                  heroku{" "}
                </li>
                <li>
                  {" "}
                  Sources from multiple reliable APIs (Reddit,Giphy,Osu!)
                </li>
              </ul>
              <li>
                {" "}
                GUI Graphing Calculator{" "}
                <a
                  href="https://github.com/James-Li-t/graphing-calculator"
                  className={styles.links}
                >
                  {" "}
                  [REPO]{" "}
                </a>
              </li>
              <ul className={styles.slsNormal}>
                <li> Written in Java, GUI built using NetBeans IDE </li>
                <li>
                  {" "}
                  Supports visualization of linear and quadratic equations
                </li>
                <li>
                  {" "}
                  Created for a Highschool Computer Science class summative
                </li>
              </ul>
              <li>
                {" "}
                The website you are currently browsing!{" "}
                <a
                  href="https://github.com/James-Li-t/jliport"
                  className={styles.links}
                >
                  {" "}
                  [REPO]
                </a>
              </li>
              <ul className={styles.slsNormal}>
                <li>
                  {" "}
                  Written in Javascript using the Next.js React framework and
                  Tailwind CSS for styling!{" "}
                </li>
                <li>
                  {" "}
                  Portfolio website which includes information relevant for a
                  CV/Resume
                </li>
                <li> Deployed on Vercel</li>
              </ul>
            </ul>
          </div>
          <div className={styles.section}>
            <h1 className={styles.subheader}> Work Experience.</h1>
            <p className={styles.pgNormal}>WIP</p>
          </div>
          <div className={styles.section}>
            <h1 className={styles.subheader}> Contact. </h1>
            <p className={styles.pgNormal}>
              Email: Jamesli28000@gmail.com
              <br />
              Discord: jl#4037
            </p>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
