import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

function SortAndFormatPosts(posts: Post[]): Post[] {
  return posts.sort((pA, pB) => {
    const dateA = new Date(pA.date);
    const dateB = new Date(pB.date);

    return dateA < dateB ? -1 : 1;
  });
}

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsFormated = SortAndFormatPosts(posts);

  return (
    <div className="slug-container">
      <header className="blog__header">
        <h1>
          Adelante, elige un post, cualquier post. ¡Puede ser brillante o
          simplemente otro intento de parecerlo!
        </h1>
      </header>

      <main className="blog__content">
        {postsFormated.map((post, i) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={`blog__content__card-item card-item-variant-${
              (i % 6) + 1
            }`}
          >
            <header className="post__header">
              <div className="post__header-title">
                <h4 className="text-6">{post.title}</h4>
                <time dateTime={post.date}>{post.formatedDate}</time>
              </div>
              <div className="post__header-icon">
                <div className="icon">
                  <ArrowTopRightIcon height={30} width={30} />
                </div>
              </div>
            </header>
            <main className="post__description">
              <p>{post.description}</p>
            </main>
          </Link>
        ))}
      </main>
    </div>
  );
}
