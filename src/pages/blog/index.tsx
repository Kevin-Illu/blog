import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container">
      <header>
        <h1>Blog</h1>
      </header>

      <main>
        {posts.map((post) => (
          <div key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
          </div>
        ))}
      </main>
    </div>
  );
}
