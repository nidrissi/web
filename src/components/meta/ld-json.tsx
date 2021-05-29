import React from "react";
import { Helmet } from "react-helmet";

const LdJSON: React.FC<{ data: Object }> = ({ data }) => {
  // remove empty fields
  const cleanedData = data;
  Object.keys(cleanedData).forEach(key => !cleanedData[key] && delete cleanedData[key]);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(cleanedData)}
      </script>
    </Helmet>
  )
};
export default LdJSON;
