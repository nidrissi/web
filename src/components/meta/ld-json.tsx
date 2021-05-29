import React from "react";
import { Helmet } from "react-helmet";

const LDJSON: React.FC<{ data: Object }> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
};
export default LDJSON;
