export const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
  onVisitHighlightedLine(node: any) {
    node?.properties?.className?.push("line--highlighted");
  },
};
