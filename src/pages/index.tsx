import Head from "next/head";
import { Layout } from "@/components";
import { motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ogImageContentEncode } from "@/utils/ogDataFormatter";

const Home = () => {
  const ogContent = ogImageContentEncode({
    title: "Kevin Illu",
    description: "Software Developer",
  });

  return (
    <Layout>
      <Head>
        <title>Kevin Illu</title>
        <meta
          name="description"
          content="Explora el mundo del desarrollo de software y el diseño de interfaces"
        />
        <meta
          name="keywords"
          content="programación, desarrollo de software, tecnología, tutoriales, kvn, KVN, kevin illu, blog, Home, blog de kevin illu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kevin Illu" />
        <link rel="icon" href="/kevin-icon.ico" sizes="any" />

        {/* open graph */}
        <meta
          property="og:title"
          content="Kevin Illu | Desarrollador de Software"
        ></meta>
        <meta
          property="og:description"
          content="Explora el mundo del desarrollo de software y el diseño de interfaces"
        />
        <meta property="og:image" content={ogContent} />
        {/* <meta property="og:url" content=""></meta> */}

        {/* twitter */}
        <meta
          property="twitter:title"
          content="Kevin Illu | Desarrollador de Software"
        ></meta>
        <meta
          property="twitter:description"
          content="Explora el mundo del desarrollo de software y el diseño de interfaces"
        ></meta>
        <meta property="twitter:image" content={ogContent}></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Layout.Header withNavbar className="container home__header">
        <div className="header-content">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                // delay: 2,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="description"
          >
            Soy kevin Illu, software developer con base en Guatemala, en este
            blog te enseñaré lo que he aprendido y lo que estoy aprendiendo en
            mi carrera. Exploraremos una variedad de temas emocionantes,
            incluyendo configurar nvim, trabajar con TypeScript, desarrollar
            aplicaciones en React, crear sorprendentes animaciones en la web,
            explorar patrones de diseño y arquitectura de software, y muchos
            otros. Acompáñame en este viaje mientras compartimos conocimientos y
            experiencias en el mundo del desarrollo de software.
          </motion.p>
          <div className="header-links">
            <Link href="/blog" className="with-icon btn btn-primary">
              leer mis posts
              <ArrowTopRightIcon width={20} height={20} />
            </Link>
            <Link href="/" className="btn btn-secondary">
              sobre mi
            </Link>
          </div>
        </div>
      </Layout.Header>
      <Layout.Footer />
    </Layout>
  );
};

export default Home;
