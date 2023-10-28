import { LapTimerIcon } from "@radix-ui/react-icons";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

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
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="slug-container">
      <article>
        <header className="post__header">
          <h1 className="post__title">{post.title}</h1>
          <div className="post__info">
            <p>{post.formatedDate}</p>
            <p>/</p>
            <div className="post__info__reading-time">
              <LapTimerIcon width={20} height={20} />
              <p>{post.readingTime}</p>
            </div>
          </div>
        </header>
        <div className="post-content">
          <MDXContent />
        </div>
      </article>
    </div>
  );
}
