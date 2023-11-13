import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Post, allPosts } from "contentlayer/generated";
import { Layout } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
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
      <Layout.Content className="container recent__posts">
        <hr />
        <section className="recent__posts__container">
          <div className="recent__posts__header">
            <div className="square">
              <h2 className="rencet__posts__container__title">
                Todos los posts
              </h2>
              <div className="spacer"></div>
              <Link href="/blog" className="all-posts__link">
                Ver todos los posts
                <ArrowTopRightIcon width={20} height={20} />
              </Link>
            </div>
          </div>
          <div className="recent__posts__list">
            {posts.map((post) => (
              <div key={post._id} className="recent__post">
                <div className="recent__post__title">
                  <p>{post.title}</p>
                </div>
                <div className="recent__post__footer">
                  <p>{post.formatedDate}</p>
                  <Link href={`/blog/${post.slug}`} className="link">
                    <ArrowTopRightIcon width={24} height={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
}
