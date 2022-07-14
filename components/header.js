import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="my-2">
        <h1 className={styles.title}>JAMES LI</h1>
        <h1 className={styles.description}>welcome to my homepage</h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row mx-10">
          <Link href="/journal">
            <a className={styles.links}>[JOURNAL]</a>
          </Link>
          <Link href="/resources">
            <a className={styles.links}>[RESOURCES]</a>
          </Link>
          <Link href="/">
            <a className={styles.links}>[HOME]</a>
          </Link>
        </div>
        <div className="flex flex-row mx-6">
          <a
            href="https://github.com/James-Li-t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.icon}>
              <Image
                src={github}
                height={48}
                width={48}
                alt=""
                layout="fixed"
              />
            </div>
          </a>
          <a
            href="https://twitter.com/j4m3sli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.icon}>
              <Image
                src={twitter}
                height={48}
                width={48}
                alt=""
                layout="fixed"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/james-li-3675a91b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.icon}>
              <Image
                src={linkedin}
                height={48}
                width={48}
                alt=""
                layout="fixed"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
