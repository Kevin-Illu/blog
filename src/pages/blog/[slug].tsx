import { Layout } from "@/components";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { ogImageContentEncode } from "@/utils/ogDataFormatter";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);

  const ogContent = ogImageContentEncode({
    title: post.title,
  });

  return (
    <Layout>
      <Head>
        {/*TODO: add dinamic keywords for SEO*/}
        <title>{post.slug}</title>
        <meta name="author" content="Kevin Illu" />
        <meta name="description" content={post.description} />
        <meta property="og:image" content={ogContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout.Header withNavbar className="post__container post__header">
        <div className="post__header__content">
          <h1 className="post__title">{post.title}</h1>
          <p className="post__description">{post.description}</p>
          <div className="post__info">
            <p>{post.formatedDate}</p>
            <p>/</p>
            <div className="post__info__reading-time">
              <LapTimerIcon width={20} height={20} />
              <p>{post.readingTime}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{
            borderRadius: "8px",
          }}
          whileHover={{
            borderRadius: "36px",
          }}
          className="post__header__img"
        >
          <Image src={post.img} alt="hola" width={600} height={600} />
        </motion.div>

        <hr />
      </Layout.Header>
      <Layout.Content className="post__container content-container">
        <article className="post-content">
          <MDXContent />
        </article>
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
