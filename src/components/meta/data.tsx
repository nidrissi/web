import React from "react";

type MetaProps = {
  date: string;
  lastMod: string;
  tags: string[];
};

const Meta: React.FC<MetaProps> = ({ date, lastMod, tags }) => {
  return (
    <>
      <span>
        Published <time dateTime={date}>{date}</time>.
      </span>
      {lastMod ? (
        <span>
          Updated <time dateTime={lastMod}>{lastMod}</time>.
        </span>
      ) : null}
      {tags.map((t) => (
        <span key={t}>#{tags}</span>
      ))}
    </>
  );
};
export default Meta;
