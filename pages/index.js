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
        <h1 className='text-white text-5xl font-bold underlinetext-3xl font-bold '>
        星街すいせい
        </h1>
        <h3 className = 'text-white font-bold'>
        THIS IS A PARAGRAPH
        </h3>
      </main>
    </div>
  )
}
