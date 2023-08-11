import Head from "next/head";
import Image from "next/image";

import styles from "./blogLayout.module.css";
import utilStyles from "../../../styles/utils.module.css";
import Link from "next/link";
import Footer from "../../footer";

const name = "Jonas Bučinskas";
export const siteTitle = "Jonas Bučinskas - Every experience feeds ideas!";

export default function BlogLayout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="Jonas Bučinskas - Every experience feeds ideas!"
        />
        <meta
          property="og:image"
          content="https://bucinskas.io/images/twitter-meta.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" value="https://bucinskas.io" />
        <meta name="twitter:creator" content="@bucinskas" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Footer />
      <div>
        <h2>Tech Events in Lithuania</h2>
        <p>
          This is a test widget for{" "}
          <a href="https://fiestos.com">Fiestos.com</a>
        </p>
        <iframe
          src="https://fiestos.com/api/v1/client/widget?country=Lithuania&subcategory=sub_csfzax1ekdzvwuyojo9r"
          width="100%"
          name="search_iframe"
          style={{ border: "none", height: "600px" }}
        ></iframe>
      </div>
    </div>
  );
}
