import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Post, allPosts } from "contentlayer/generated";
import { Layout, PostCard } from "@/components";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Kevin Illu | Desarrollador de Software y Apasionado del Arte
        </title>
        <meta
          name="description"
          content="Explora el mundo del desarrollo de software, el diseño de interfaces y el arte"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Layout.Header className="hero container-base">
          <div className="hero__title">
            <h1 className="title--principal sans-text">
              otro software developer blog pero escrito en nvim :D
            </h1>
          </div>
          <div className="hero__description">
            <p>
              Descubre cómo el arte y la programación se entrelazan en un viaje
              donde el código se convierte en expresiones personales y las
              aplicaciones son mucho más que herramientas simples.
              <br />
              <div className="hero__scroll-indicator">
                <ArrowDownIcon width={24} height={24} />
                <p>scroll</p>
              </div>
            </p>
          </div>
        </Layout.Header>
        <Layout.Content className="recent-posts">
          <section className="recent-posts__container container-base home__section">
            <h2 className="recent-posts__title">Posts recientes</h2>
            <div className="recent-posts__list">
              {posts.map((post) => (
                <PostCard key={post._id} {...post} />
              ))}
            </div>

            <div className="recent-posts__link__container">
              <Link href="/blog">ver todo.</Link>
            </div>
          </section>
        </Layout.Content>
        <Layout.Footer className="container-base footer">
          <p className="sans-text">kevin illu | desarrollador de software</p>
          <p>creado con nexjs typescript sass</p>
        </Layout.Footer>
      </Layout>
    </div>
  );
}
