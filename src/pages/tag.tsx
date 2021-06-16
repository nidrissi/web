import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import TagLink from "../components/meta/TagLink";

type TagListProps = {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    }
  }
}
const TagList: React.FC<TagListProps> = ({ data: { allMdx: { group } } }) => {
  return (
    <Layout title="All Tags" description="The list of all tags used on the website.">
      <h1 role="banner" className="text-4xl font-bold mb-8">
        <FontAwesomeIcon icon={faTags} className="mr-1" />
        All Tags
      </h1>
      <ul className="flex flex-wrap gap-8">
        {group.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <TagLink tag={fieldValue} big count={totalCount} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default TagList;

export const query = graphql`
query {
  allMdx {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`
