import React from "react";
import { Provider } from "react-redux";

import Layout from "../../components/Layout";
import store from "../../a2b/store";
import App from "../../a2b/App";

const A2B: React.FC<{}> = () => {
  return (
    <Layout title="arXiv2BibLaTeX" description="Convert an arXiv entry to a BibLaTeX entry.">
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  )
};
export default A2B;
