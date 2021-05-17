import React from "react";

type DateTimeProps = {
  date: string;
  label: string;
  TBA?: boolean
}

const DateTime: React.FC<DateTimeProps> = ({ date, label, TBA }) => {
  if (!date) {
    return null;
  }
  return (
    <div>
      {label}
      {' '}
      <time dateTime={new Date(date).toISOString()}>
        {TBA ? '?' : null}
        {new Date(date).toLocaleDateString()}
        {TBA ? '?' : null}
      </time>
      .
    </div>
  )
}
export default DateTime;
