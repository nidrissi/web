import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

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
    <Layout title="Tags" description="The list of all tags used on the website.">
      <h1 className="text-4xl font-bold mb-4">Tags</h1>
      <ul className="flex flex-wrap gap-4">
        {group.map(({ fieldValue: tag }) => (
          <li key={tag}>
            <Link to={`/tag/${tag}`} className="block text-2xl flex-auto font-semibold p-2 m-auto border border-green-800 text-green-800 hover:bg-green-800 hover:text-white rounded-md">
              <FontAwesomeIcon icon={faTag} className="mr-1" aria-label="Tag" />
              {tag}
            </Link>
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
