import { Layout } from "@/components";
import { Post, allPosts } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  const sortedPosts = allPosts.sort((postA, postB) => {
    const dateA = new Date(postA.date);
    const dateB = new Date(postB.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Toma los primeros 3 posts (los más recientes)
  const recentPosts = sortedPosts.slice(0, 3);

  return { props: { posts: recentPosts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Layout.Header>
          <div className="header__root__title">
            <h1 className="header__root__title--root">
              <span>WEB DEVELOPER</span>
              <span>DESKTOP DEVELOPER</span>
              <span>DESIGN SISTEM ENTUSIAST</span>
            </h1>
          </div>
        </Layout.Header>
        <Layout.Content>
          <section className="recent-posts">
            <h2>Recent posts</h2>
            <div className="recent-posts__list">
              {posts.map((post) => (
                <PostCard key={post._id} {...post} />
              ))}
            </div>
          </section>
        </Layout.Content>
        <Layout.Footer>
          <p>footer</p>
        </Layout.Footer>
      </Layout>
    </div>
  );
}

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
}

export const PostCard: FC<PostCardProps> = ({ title, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="recent-posts__list__item">
      <h3 className="item__title">{title}</h3>
      <p className="item__description">{description}</p>
    </Link>
  );
};
