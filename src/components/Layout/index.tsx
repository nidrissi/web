import React from "react";

import SEO, { SEOProps } from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie from "./Cookie";

type LayoutProps = {
  lang?: string;
} & SEOProps;

const Layout: React.FC<LayoutProps> = ({ children, lang, ...props }) => {
  return (
    <div className="flex flex-col gap-y-4 min-h-screen dark:bg-gray-800 dark:text-gray-300">
      <SEO {...props} />
      <Cookie />
      <Navbar />
      <main className="container mx-auto p-2 flex-grow" lang={lang || "en"}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
