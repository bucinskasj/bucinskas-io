import Head from "next/head";
import BlogLayout, { siteTitle } from "../components/layouts/blog/blogLayout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
    return (
        <BlogLayout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I love to create useful things with software and activities
                    where wearing a helmet or a life vest is a hard requirement.
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Posts</h2>
                    {allPostsData.map(({ id, date, title }) => (
                        <Link href={`/posts/${id}`} className={utilStyles.link}>
                        <div className={utilStyles.postCard}>
                            <p className={utilStyles.postTitle}>
                                {title}
                            </p>
                            <p className={utilStyles.postDate}>
                                <Date dateString={date}/>
                            </p>
                        </div>
                        </Link>
                    ))}
            </section>
        </BlogLayout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
