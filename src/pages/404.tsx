import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";

const NotFound: React.FC<{}> = () => {
  return (
    <Layout title="404 Not Found">
      <div className="w-full h-48 rounded-xl bg-gray-300 flex">
        <div className="my-auto mx-auto text-center">
          <h1 className="text-5xl mb-2">404 Not found</h1>
          <a href="/" className="text-2xl text-blue-600 hover:underline">
            <FontAwesomeIcon icon={faUndo} />
            &nbsp; Go back
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default NotFound;
