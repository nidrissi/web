import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import { faChalkboard, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  number: number;
  date: string;
  images: {
    childImageSharp: {
      gatsbyImageData: ImageDataLike;
      original: {
        src: string;
      };
    };
  }[];
  video: string;
}

const Card: React.FC<CardProps> = ({ number, date, children, video, images }) => {
  return (
    <div className="flex flex-col border border-gray-400 rounded-md gap-2">
      <div className="p-1 bg-gray-200 rounded-t-md">
        <span className="font-semibold text-lg">Lecture {number}</span>
        {' · '}
        {date}
      </div>
      <div className="flex-grow p-1">{children}</div>
      <div className="flex flex-col gap-2 sm:flex-row sm:divide-x divide-gray-500 text-center bg-gray-100 rounded-b-md p-1">
        <a
          href={images[number - 1].childImageSharp.original.src}
          className="block flex-grow"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faChalkboard} className="mr-1" />
          Blackboard
        </a>
        <a
          href={video}
          className="block flex-grow"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faVideo} className="mr-1" />
          Video
        </a>
      </div>
    </div>
  )
}
export default Card;
