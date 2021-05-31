import React from "react";
import { Helmet } from "react-helmet";

const LdJSON: React.FC<{}> = ({ children }) => {
  // remove empty fields
  const cleanedData = children;
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
