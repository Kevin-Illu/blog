import Head from "next/head";
import { Layout } from "@/components";
import { motion } from "framer-motion";
import { childVariants, parentVariants } from "./home.animations";
import { CldOgImage } from "next-cloudinary";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>
          Kevin Illu | Desarrollador de Software y Apasionado del Arte{" "}
        </title>
        <meta
          name="description"
          content="Explora el mundo del desarrollo de software, el diseño de interfaces y el arte"
        />
        <meta
          name="keywords"
          content="programación, desarrollo de software, tecnología, tutoriales, kvn, KVN, kevin illu, blog, Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kevin Illu" />
        <link rel="icon" href="/kevin-icon.ico" sizes="any" />
      </Head>
      <CldOgImage
        src="/og-img.png"
        alt="kevin's blog logo"
        sizes="100vw"
        overlays={[
          {
            text: {
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 200,
              fontWeight: "bold",
              text: "kevin illu | web developer",
            },
          },
        ]}
      />
      <Layout.Header withNavbar className="container home__header">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 2,
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
        </div>
      </Layout.Header>
      <Layout.Content className="container home__content">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="logo__container"
        >
          <span className="sr-only">kvn</span>
          <span className="logo">
            {"kvn".split("").map((char, i) => (
              <motion.span
                variants={childVariants}
                className="logo__char font-sans"
                key={i}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </Layout.Content>
      <Layout.Footer className="container" />
    </Layout>
  );
};

export default Home;
