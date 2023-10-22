import { FC } from "react";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
}

export const PostCard: FC<PostCardProps> = ({ title, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="list__item text-decoration-none">
      <div className="list__item__header">
        <div className="list__item__header__read-more">
          <p className="read-more__text">echar un ojo</p>
        </div>
        <ArrowTopRightIcon width={28} height={28} />
      </div>
      <div className="list__item__content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </Link>
  );
};
