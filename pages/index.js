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
        
        <h1 className={styles.title}>
        THIS IS A PLACEHOLDER PAGE
        </h1>
        
        <h4 className={styles.title}>
        and then I went..
        <a href = "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A/featured" target="_blank">WHAT!</a>
        </h4>
    
        <h1 className='m-8 text-white text-5xl underlinetext-3xl font-bold'>
        星街すいせい
        </h1>


      </main>
    </div>
  )
}
