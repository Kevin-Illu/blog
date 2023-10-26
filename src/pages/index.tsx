import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { Post, allPosts } from "contentlayer/generated";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  // Obtiene los tres posts mas recientes de la lista, ordenados por fecha.
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
  const postsFormated = posts.map((post) => {
    const dateToFormat = new Date(post.date);
    const formater = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      ...post,
      date: formater.format(dateToFormat),
    };
  });

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

      <main className="container">
        <header className="home__header">
          <h1 className="home__header__title">KVN</h1>
          <p className="font-sans home__header__description">
            Soy kevin Illu, software developer con base en Guatemala, en este
            blog te enseñaré lo que he aprendido y lo que estoy aprendiendo en
            mi carrera. Exploraremos una variedad de temas emocionantes,
            incluyendo configurar nvim, trabajar con TypeScript, desarrollar
            aplicaciones en React, crear sorprendentes animaciones en la web,
            explorar patrones de diseño y arquitectura de software, y muchos
            otros. Acompáñame en este viaje mientras compartimos conocimientos y
            experiencias en el mundo del desarrollo de software.
          </p>
        </header>
        <section className="home__section">
          <header className="home__section__header">
            <h2 className="home__section__header__title">POSTS RECIENTES</h2>
            <Link className="home__section__header__link" href="/blog">
              VER TODOS <ArrowRightIcon height={20} width={20} />
            </Link>
          </header>
          <div className="featured__list">
            {postsFormated.map(({ _id, title, description, date, slug }) => (
              <div key={_id} className="featured__post">
                <p className="featured__post__date">{date}</p>
                <div className="featured__post__info">
                  <p className="featured__post__info__title">{title}</p>
                  <p className="featured__post__info__description">
                    {description}
                  </p>
                  <div className="featured__post__info__link">
                    <Link href={`/blog/${slug}`}>
                      <ArrowTopRightIcon height={60} width={30} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <FloatMenu />
      </main>
    </div>
  );
}

export const FloatMenu = () => {
  return (
    <div className="float-menu">
      <p className="float-menu__item">light</p>
      <p className="float-menu__item">menu</p>
      <ul className="float-menu__sub-menu">
        <li>blog</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};
