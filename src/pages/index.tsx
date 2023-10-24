import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({}) {
  const router = useRouter();

  useEffect(() => {
    router.push("/design-system");
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

      <main>hola</main>
    </div>
  );
}
