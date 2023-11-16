import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { motion } from "framer-motion";
import { Layout } from "@/components";

const parentVariants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
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

function SortAndFormatPosts(posts: Post[]): Post[] {
  return posts.sort((pA, pB) => {
    const dateA = new Date(pA.date);
    const dateB = new Date(pB.date);

    return dateA < dateB ? -1 : 1;
  });
}

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsFormated = SortAndFormatPosts(posts);

  return (
    <Layout>
      <Head>
        <title>Blog | kvn</title>
        <meta
          name="description"
          content="Encuentra artículos y tutoriales sobre programación y desarrollo de software en el blog de KVN. Explora temas de tecnología, aprendizaje y mejores prácticas de desarrollo."
        />
        <meta
          name="keywords"
          content="programación, desarrollo de software, tecnología, tutoriales, KVN, Kevin Illu, blog, Blog de kevin illu"
        />
        <meta name="author" content="Kevin Illu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout.Header withNavbar className="blog__container">
        <h1 className="blog__header__title">Blog</h1>
      </Layout.Header>
      <hr />
      <Layout.Content className="blog__container">
        <motion.div
          className="blog-grid"
          initial="hidden"
          animate="show"
          variants={parentVariants}
        >
          {postsFormated.map((post) => (
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
                  <Image
                    src="/bg-primary.jpg"
                    alt="hola"
                    width={600}
                    height={600}
                  />
                </motion.div>
                <div className="entry-content">
                  <h4 className="entry-title">{post.title}</h4>
                  <time className="entry-date" dateTime={post.date}>
                    {post.formatedDate}
                  </time>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Layout.Content>
      <Layout.Footer className="blog__container blog__footer" />
    </Layout>
  );
}
