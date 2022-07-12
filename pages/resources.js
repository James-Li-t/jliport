import Head from "next/head";
import Link from "next/link";
import stMain from "../styles/Home.module.css";
import styles from "../styles/Journal.module.css";

export default function Hub(){
  return (
    <div className={stMain.container}>
      <Head>
        <title>Journal Hub</title>
        <meta name="jlihub" content="All about James Li" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={stMain.main}>
        <div className={stMain.wrapper}>
          <div className="my-2">
            <h1 className={stMain.title}>JAMES LI</h1>
            <h1 className={stMain.description}>welcome to my homepage</h1>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row mx-10">
              <Link href="/">
              <a className={stMain.links}>[HOME]</a>
              </Link>
              <Link href="/journal/hub">
              <a className={stMain.links}>[JOURNAL]</a>
              </Link>
            </div>
            <div className="flex flex-row mx-6">
              <a
                href="https://github.com/James-Li-t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.svg" alt='' className={stMain.icon} />
              </a>
              <a
                href="https://twitter.com/j4m3sli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.svg" alt='' className={stMain.icon} />
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className={stMain.subheader}>WIP</h1>
        </div>
      </main>
    </div>
  ); 
}
