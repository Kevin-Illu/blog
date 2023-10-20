import { Layout } from "@/components";
import { getTimeAgo } from "@/utils/relativeTime";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect, useState } from "react";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Layout.Header className="">
        <h1 className="blog__header__title">{post.title}</h1>
        <p className="blog__header__date">{timeAgo}</p>
      </Layout.Header>
      <Layout.Content className="post__container">
        <MDXContent />
      </Layout.Content>
    </Layout>
  );
}
