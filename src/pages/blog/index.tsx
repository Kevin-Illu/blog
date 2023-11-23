import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { motion } from "framer-motion";
import { Layout } from "@/components";
import { ogImageContentEncode } from "@/utils/ogDataFormatter";

export const parentVariants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

function SortPosts(posts: Post[]): Post[] {
  return posts.sort((pA, pB) => {
    const dateA = new Date(pA.date);
    const dateB = new Date(pB.date);

    return dateA < dateB ? 1 : -1;
  });
}

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedPosts = SortPosts(posts);

  const ogContent = ogImageContentEncode({
    title: "Blog",
  });

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Encuentra artículos y tutoriales sobre programación y desarrollo de software en mi blog. Explora temas de tecnología, aprendizaje y mejores prácticas de desarrollo."
        />
        <meta
          name="keywords"
          content="programación, desarrollo de software, tecnología, tutoriales, KVN, Kevin Illu, blog, Blog de kevin illu"
        />
        <meta name="author" content="Kevin Illu" />
        <meta property="og:image" content={ogContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout.Header withNavbar className="container">
        <h1 className="blog__header__title">Blog</h1>
        <hr />
      </Layout.Header>
      <Layout.Content className="container">
        <motion.div
          className="blog-grid"
          initial="hidden"
          animate="show"
          variants={parentVariants}
        >
          {sortedPosts.map((post, i) => (
            <motion.div
              variants={childVariants}
              key={post._id}
              className="entry"
            >
              <Link href={`/blog/${post.slug}`} className="entry-card">
                <motion.div
                  whileHover={{
                    borderRadius: "36px",
                  }}
                  className="entry-header"
                >
                  <Image src={post.img} alt="hola" width={600} height={600} />
                </motion.div>
                <div className="entry-content">
                  <time className="entry-date" dateTime={post.date}>
                    {post.formatedDate}
                  </time>
                  <h4 className="entry-title">{post.title}</h4>

                  {i === 0 && (
                    <p className="entry-description">{post.description}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
