import React from "react";

const DateTime: React.FC<{ date: string }> = ({ date }) => {
  return (
    <time dateTime={new Date(date).toISOString()}>
      {new Date(date).toLocaleDateString()}
    </time>
  )
}
export default DateTime;
