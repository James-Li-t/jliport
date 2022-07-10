import Head from 'next/head'
import Image from 'next/image'
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

    <div className='my-10'>
    <h1 className={styles.title}>
    JAMES LI 
    </h1>
    <h1 className = {styles.description}>
    welcome to my homepage
    </h1>

    </div>
    <p className='mx-8 text-gray-300 font-mono'>
    Hey! I'm James Li, aspiring heroin conoissuer and Valorant extrodinaire 😛. You can find a list
    of all the substances I abuse <a href="https://en.wikipedia.org/wiki/Drugs_controlled_by_the_UK_Misuse_of_Drugs_Act"> here. </a>
    </p>
    <div>

    </div>
    </main>
    </div>
  )
}
