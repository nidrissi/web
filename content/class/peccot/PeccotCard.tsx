import React from "react"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getImage, GatsbyImage, ImageDataLike } from 'gatsby-plugin-image';

type PeccotCardProps = {
  link: string;
  number: string;
  date: string;
  video: string
  image: ImageDataLike;
}

const PeccotCard: React.FC<PeccotCardProps> = ({ link, number, date, image, children }) => {
  return (
    <div className="border rounded-md flex flex-col gap-1 h-full">
      <a href={link} className="block" target="_blank" rel="noreferrer noopener">
        <GatsbyImage
          alt={`Photo of the lecture ${number}`}
          image={getImage(image)}
          imgClassName="rounded-t-md"
        />
      </a>
      <div>
        <span className="font-bold text-xl">Lesson {number}</span>
        <br />
        <span className="text-gray-700 font-semibold">{date}</span>
      </div>
      <div className="flex-grow">
        {children}
      </div>
      <a className="block p-2 bg-gray-200 rounded-b-md text-center" href={link} rel="noreferrer noopener">
        <FontAwesomeIcon icon={faPlayCircle} className="mr-1" />
        Video
      </a>
    </div>
  )
}
export default PeccotCard
