import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
    <h1 className={styles.title}>
    JAMES LI 
    </h1>
    <h1 className = {styles.description}>
    welcome to my homepage
    </h1>
    </div>
    <div className='flex flex-row'>
    <div>
    <a href="https://github.com/James-Li-t" target='_blank'rel='noopener noreferrer'><img src='/github.svg' className={styles.icon}/></a> 
    </div>
    <div>
    <a href="https://twitter.com/j4m3sli" target='_blank'rel='noopener noreferrer'><img src='/twitter.svg' className={styles.icon}/></a> 
    </div>
    </div>
    </div>
    <div className='pr-2 pt-8'>
    <p className={styles.pgNormal}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    <a href="https://en.wikipedia.org/wiki/Drugs_controlled_by_the_UK_Misuse_of_Drugs_Act"> here. </a>
    </p>
    </div>
    </main>
    </div>
  )
}
