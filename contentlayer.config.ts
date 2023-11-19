import rehypePrettyCode from "rehype-pretty-code";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import {
  formatDateTime,
  calculateReadingTime,
  rehypePrettyCodeOptions,
} from "./src/lib";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    img: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    readingTime: {
      type: "string",
      resolve: (post) => calculateReadingTime(post.body.raw),
    },
    formatedDate: {
      type: "string",
      resolve: (post) => formatDateTime(post.date),
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
