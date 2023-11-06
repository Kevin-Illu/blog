import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { Post, allPosts } from "contentlayer/generated";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Layout, NavBar, RecentPostItem } from "@/components";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  // Obtiene los tres posts mas recientes de la lista, ordenados por fecha.
  // la fecha se formatea para optener el mes en formato long
  const recentPosts = allPosts
    .sort((postA, postB) => {
      const dateA = new Date(postA.date);
      const dateB = new Date(postB.date);

      return dateA > dateB ? -1 : 1;
    })
    .slice(0, 3);

  return { props: { posts: recentPosts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
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

      <div className="container">
        <NavBar />
      </div>
      <Layout.Header className="home__header container">
        <h1 className="home__header__title">KVN</h1>
        <p className="font-sans home__header__description">
          Soy kevin Illu, software developer con base en Guatemala, en este blog
          te enseñaré lo que he aprendido y lo que estoy aprendiendo en mi
          carrera. Exploraremos una variedad de temas emocionantes, incluyendo
          configurar nvim, trabajar con TypeScript, desarrollar aplicaciones en
          React, crear sorprendentes animaciones en la web, explorar patrones de
          diseño y arquitectura de software, y muchos otros. Acompáñame en este
          viaje mientras compartimos conocimientos y experiencias en el mundo
          del desarrollo de software.
        </p>
      </Layout.Header>

      <Layout.Content className="container">
        <section className="home__section">
          <header className="home__section__header">
            <h2 className="home__section__header__title">Posts recientes</h2>
            <Link
              className="home__section__header__link btn btn-secondary-gray"
              href="/blog"
            >
              Ver todos <ArrowRightIcon height={20} width={20} />
            </Link>
          </header>

          <div className="featured__list">
            {posts.map((post) => (
              <RecentPostItem key={post._id} {...post} />
            ))}
          </div>
        </section>
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
