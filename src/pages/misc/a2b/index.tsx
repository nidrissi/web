import React from "react";
import { Provider } from "react-redux";

import Layout from "../../../components/Layout";
import store from "../../../a2b/store";
import App from "../../../a2b/App";

const A2B: React.FC<{}> = () => {
  return (
    <Layout title="arXiv2BibLaTeX" description="Convert an arXiv entry to a BibLaTeX entry.">
      <h1 className="font-bold text-2xl mb-3">arXiv2BibLaTeX</h1>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  )
};
export default A2B;
