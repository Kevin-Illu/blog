import { getTimeAgo } from "@/utils/relativeTime";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useCallback, useEffect, useState } from "react";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [timeAgo, setTimeAgo] = useState("");
  const MDXContent = useMDXComponent(post.body.code);

  useEffect(() => {
    const time = new Date(post.date);
    const timeAgo = getTimeAgo(time);
    setTimeAgo(timeAgo);
  }, []);

  return (
    <div className="container">
      <header className="blog__header">
        <h1>{post.title}</h1>
        <span>{timeAgo}</span>
      </header>

      <MDXContent />
    </div>
  );
}
