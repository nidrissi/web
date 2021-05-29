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

type ContactQuery = {
  site: {
    siteMetadata: {
      author: {
        email: string;
        organizations: {
          url: string;
          name: string
        }[];
        phone: {
          pretty: string;
          ugly: string;
        };
        address: string[];
        office: string;
      }
    }
  }
}

const Contact: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: {
        author: { email, organizations, phone, address, office },
      },
    },
  }: ContactQuery = useStaticQuery(graphql`
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
    { icon: faUniversity, items: organizations.map(o => ({ label: o.name, url: o.url })) },
    { label: phone.pretty, url: `tel:${phone.ugly}`, icon: faPhone },
    { label: address.join(" • "), icon: faMapMarkerAlt },
    { label: `Office: ${office}`, icon: faDoorOpen },
  ];

  const ContactLink: React.FC<{ url: string, label: string }> = ({ url, label }) => (
    <a
      href={url}
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
    </a>
  );

  return (
    <>
      <h2 className="text-2xl font-bold mb-1">Contact</h2>
      <ul>
        {contactLinks.map((link) => (
          <li key={link.icon.iconName} className="content-center">
            <FontAwesomeIcon icon={link.icon} fixedWidth className="mr-1" />
            {link.items
              ? link.items.map((item, index) => (
                <React.Fragment key={item.label}>
                  {index ? ' & ' : null}
                  <ContactLink url={item.url} label={item.label} />
                </React.Fragment>
              ))
              : link.url ? (
                <ContactLink url={link.url} label={link.label} />
              ) : link.label}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Contact;
