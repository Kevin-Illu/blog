import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Post, allPosts } from "contentlayer/generated";
import { Layout, NavBar, RecentPostItem } from "@/components";
import Image from "next/image";

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
      <Layout.Header withNavbar className="container header">
        <div className="header__banner">
          <Image
            src="/bg-primary.jpg"
            width={1200}
            height={1200}
            alt="shadow bg"
          />
        </div>
        <p className="header__description">
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
      <Layout.Footer />
    </Layout>
  );
}
