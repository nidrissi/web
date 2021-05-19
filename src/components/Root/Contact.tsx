import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faDoorOpen,
  faMapMarkerAlt,
  faPhone,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: {
        author: { email, organizations, phone, address, office },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            email
            address
            office
            phone {
              pretty
              ugly
            }
            organizations {
              name
              url
            }
          }
        }
      }
    }
  `);

  const contactLinks = [
    { label: email, url: `mailto:${email}`, icon: faAt },
    organizations.map((o) => ({
      label: o.name,
      url: o.url,
      icon: faUniversity,
    })),
    { label: phone.pretty, url: `tel:${phone.ugly}`, icon: faPhone },
    { label: address.join(" • "), icon: faMapMarkerAlt },
    { label: `Office: ${office}`, icon: faDoorOpen },
  ].flat();
  return (
    <>
      <h2 className="text-2xl font-bold mb-1">Contact</h2>
      <ul>
        {contactLinks.map((l) => (
          <li key={l.label} className="content-center">
            <FontAwesomeIcon icon={l.icon} fixedWidth className="mr-1" />
            {l.url ? (
              <a
                href={l.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {l.label}
              </a>
            ) : (
              l.label
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Contact;
