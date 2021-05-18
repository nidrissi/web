import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackExchange, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

type FooterQuery = {
  site: {
    siteMetadata: {
      author: {
        name: string;
        email: string;
        organizations: {
          name: string;
          url: string
        }[];
        social: {
          arXiv: string;
          github: string;
          mathoverflow: string;
          twitter: string;
        }
      }
    }
  }
};

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
  }: FooterQuery = useStaticQuery(graphql`
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

  const links: { url: string; label: string; icon?: IconDefinition }[] = [
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
        <Link to="/" className={linkStyle}>
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          {name}
        </Link>
        {links.map((v) => (
          <a
            href={v.url}
            rel="me"
            className={linkStyle}
            key={v.label}
          >
            {v.icon ? (
              <FontAwesomeIcon icon={v.icon} className="mr-1" />
            ) : null}
            {v.label}
          </a>
        ))}
      </footer>
    </>
  );
};
export default Footer;
