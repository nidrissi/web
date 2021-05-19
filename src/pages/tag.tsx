import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faTags } from "@fortawesome/free-solid-svg-icons";
import TagLink from "../components/meta/TagLink";

type TagListProps = {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
      }[];
    }
  }
}
const TagList: React.FC<TagListProps> = ({ data: { allMdx: { group } } }) => {
  return (
    <Layout title="All Tags" description="The list of all tags used on the website.">
      <h1 className="text-4xl font-bold mb-8">
        <FontAwesomeIcon icon={faTags} className="mr-1" />
        All Tags
      </h1>
      <ul className="flex flex-wrap gap-4">
        {group.map(({ fieldValue: tag }) => (
          <li key={tag}>
            <TagLink tag={tag} big />
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
    }
  }
}
`
