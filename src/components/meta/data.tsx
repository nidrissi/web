import React from "react";

type MetaProps = {
  date: Date;
  lastMod: Date;
  tags: string[];
};

const Meta: React.FC<MetaProps> = ({ date, lastMod, tags }) => {
  return (
    <>
      <span>
        Published{" "}
        <time dateTime={date.toISOString()}>
          {new Date(date).toLocaleDateString()}
        </time>
        .
      </span>
      {lastMod ? (
        <span>
          Updated{" "}
          <time dateTime={lastMod.toISOString()}>
            {lastMod.toLocaleDateString()}
          </time>
          .
        </span>
      ) : null}
      {tags.map((t) => (
        <span key={t}>#{tags}</span>
      ))}
    </>
  );
};
export default Meta;
