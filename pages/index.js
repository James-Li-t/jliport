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
            Yo! I am James Li, currently a University Student with
            interests/passions regarding anything in the computer science space
            (currently focusing on Web Development using React.js). I also have
            interests in digital content creation, such as video editing, motion
            design etc. My hobbies include gaming, VTubers, eating out, and going on
            urban adventures around my city! 🗿
          </p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> Projects. </h1>
          <ul class={styles.lsNormal}>
          <li> Utility bot for the online messaging platform Discord <a href='https://github.com/James-Li-t/railgunbot'> [REPO] </a></li>
            <ul class={styles.slsNormal}>
            <li> Written in python using the discord.py library, hosted on heroku </li>
            <li> Sources from multiple reliable APIs (Reddit,Giphy,Osu!)</li>
            </ul>
          <li> GUI Graphing Calculator <a href='https://github.com/James-Li-t/graphing-calculator'> [REPO] </a></li>
            <ul class={styles.slsNormal}>
            <li> Written in Java, GUI built using NetBeans include </li>
            <li> Supports visualization of linear and quadratic equations</li>
            <li> Created for a Highschool Computer Science class summative</li>
            </ul>
          <li> The website you are currently browsing! <a href='https://github.com/James-Li-t/jliport'> [REPO]</a></li>
            <ul class={styles.slsNormal}>
            <li> Written in Javascript using the Next.js React framework and Tailwind CSS for styling! </li>
            <li> Portfolio website which includes information relevant for a CV/Resume</li>
            <li> Hosted on Vercel</li>
            </ul>
          </ul>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> Work Experience.</h1>
          <p className={styles.pgNormal}>
          WIP
          </p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.subheader}> Contact. </h1>
          <p className={styles.pgNormal}>
            Email: Jamesli28000@gmail.com
            <br />
            Discord: jl#4037
          </p>
        </div>
      </main>
    </div>
  );
}
