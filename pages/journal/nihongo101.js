import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import stMain from "../../styles/Home.module.css";
import styles from "../../styles/Journal.module.css";

export default function Post() {
  return (
    <div className={stMain.container}>
      <Head></Head>
      <main className={stMain.main}>
        <Header />
        <div className="animate-fadein">
          <Footer />
        </div>
      </main>
    </div>
  );
}
