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
  };
};

const Talk: React.FC<{}> = () => {
  const { allMdx: { nodes } }: RootTalkQuery = useStaticQuery(graphql`
query RootTalkQuery {
  allMdx(
    filter: {fields: {type: {eq: "talk"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 6
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
        lang
        TBA
        online
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
      <div className="grid gap-4" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))"
      }}>
        {nodes.map(({ frontmatter, slug, wordCount: { words } }) => (
          <Mini key={slug} type="talk" slug={slug} frontmatter={frontmatter} noLink={words === 0} />
        ))}
      </div>
      <SeeMore to="/talk">talks</SeeMore>
    </section>
  );
};
export default Talk;
