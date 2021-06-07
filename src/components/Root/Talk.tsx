import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Mini from "../Mini";
import SeeMore from "./SeeMore";
import { Frontmatter } from "../meta";

type RootTalkQuery = {
  allMdx: {
    nodes: {
      slug: string;
      wordCount: { words: Number; };
      frontmatter: Frontmatter;
    }[];
  }
};

const Talk: React.FC<{}> = () => {
  const { allMdx: { nodes } }: RootTalkQuery = useStaticQuery(graphql`
query RootTalkQuery {
  allMdx(
    filter: {fields: {type: {eq: "talk"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 5
  ) {
    nodes {
      slug
      wordCount {
        words
      }
      frontmatter {
        title
        date
        lastMod
        TBA
        location
        event
        tags
        ...allUrlsFragment
      }
    }
  }
}`);

  return (
    <section>
      <h2 className="text-4xl font-bold mb-3">Talks</h2>
      <div className="flex flex-col gap-4">
        {nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
          <Mini key={slug} type="talk" slug={slug} frontmatter={frontmatter} noLink={words === 0} />
        ))}
        <SeeMore to="/talk">talks</SeeMore>
      </div>
    </section>
  );
}
export default Talk;
