import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Post } from "contentlayer/generated";
import Link from "next/link";

export const RecentPostItem = ({
  formatedDate,
  title,
  description,
  slug,
}: Post) => (
  <div className="featured__post">
    <p className="featured__post__date">{formatedDate}</p>
    <div className="featured__post__info">
      <p className="featured__post__info__title">{title}</p>
      <p className="featured__post__info__description">{description}</p>
      <div className="featured__post__info__link">
        <Link href={`/blog/${slug}`} className="btn btn-secondary">
          leer <ArrowTopRightIcon height={20} width={20} />
        </Link>
      </div>
    </div>
  </div>
);
