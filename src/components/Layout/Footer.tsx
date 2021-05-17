import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { faGithub, faStackExchange, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
    query FooterQuery {
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
    { url: `mailto:${email}`, label: email, icon: faAt },
    organizations.map((o) => ({ url: o.url, label: o.name })),
    { url: `https://arxiv.org/a/${arXiv}.html`, label: "arXiv" },
    { url: `https://github.com/${github}`, label: "GitHub", icon: faGithub },
    {
      url: `https://mathoverflow.net/users/${mathoverflow}`,
      label: "MathOverFlow",
      icon: faStackExchange
    },
    {
      url: `https://twitter.com/${twitter}`,
      label: "Twitter",
      icon: faTwitter,
    },
  ].flat();

  const linkStyle = "block flex-auto text-blue-800 hover:underline block p-2";

  return (
    <>
      <hr className="mt-2" />
      <footer className="mx-auto flex flex-wrap py-2 divide-x divide-gray-300 divide-dotted text-center">
        <Link to="/" className={linkStyle}>{name}</Link>
        {links.map((v) => (
          <a
            href={v.url}
            rel="me"
            className={linkStyle}
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
        ))}
      </footer>
    </>
  );
};
export default Footer;
