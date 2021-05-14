import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Footer: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        author: { name, arXiv, github, mathoverflow, twitter },
      },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          siteUrl
          author {
            name
            arXiv
            github
            mathoverflow
            twitter
          }
        }
      }
    }
  `);

  const links = [
    { url: "/", label: name },
    { url: `https://arxiv.org/a/${arXiv}.html`, label: "arXiv" },
    { url: `https://github.com/${github}`, label: "GitHub" },
    {
      url: `https://mathoverflow.net/users/${mathoverflow}`,
      label: "MathOverFlow",
    },
    { url: `https://twitter.com/${twitter}`, label: "Twitter" },
  ];

  return (
    <footer>
      <hr className="my-2 w-screen" />
      <div className="flex flex-wrap gap-4 divide-x divide-gray-300 divide-dotted">
        {links.map((v) => (
          <div className="flex-auto text-center" key={v.label}>
            <a
              href={v.url}
              rel="me"
              className="text-blue-800 hover:underline"
              key={v.label}
            >
              {v.label}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
