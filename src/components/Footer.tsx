import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: {
        author: {
          name,
          email,
          organizations,
          social: { arXiv, github, mathoverflow, twitter },
        },
      },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          siteUrl
          author {
            name
            email
            organizations {
              name
              url
            }
            social {
              arXiv
              github
              mathoverflow
              twitter
            }
          }
        }
      }
    }
  `);

  const links = [
    { url: "/", label: name },
    { url: `mailto:${email}`, label: email, icon: faAt },
    organizations.map((o) => ({ url: o.url, label: o.name })),
    { url: `https://arxiv.org/a/${arXiv}.html`, label: "arXiv" },
    { url: `https://github.com/${github}`, label: "GitHub", icon: faGithub },
    {
      url: `https://mathoverflow.net/users/${mathoverflow}`,
      label: "MathOverFlow",
    },
    {
      url: `https://twitter.com/${twitter}`,
      label: "Twitter",
      icon: faTwitter,
    },
  ].flat();

  return (
    <footer>
      <hr className="my-2 w-full" />
      <div className="flex flex-wrap gap-4 py-2 divide-x divide-gray-300 divide-dotted">
        {links.map((v) => (
          <div className="flex-auto text-center" key={v.label}>
            <a
              href={v.url}
              rel="me"
              className="text-blue-800 hover:underline"
              key={v.label}
            >
              {v.icon ? (
                <>
                  <FontAwesomeIcon icon={v.icon} />
                  &nbsp;
                </>
              ) : null}
              {v.label}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
