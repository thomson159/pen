import React from "react";
import Header from "../components/header";

import Footer from "../components/footer";
import Mdx from "../components/mdx";

import { StyledThemeProvider } from "../styles/themeManager";

import "../styles/layout.css";
import "../styles/prism-github.css";
import "../styles/fonts.css";

import "../i18n";

const Layout = ({ children, nofooter }) => {
  return (
    <StyledThemeProvider>
      <Header />
      <Mdx>{children}</Mdx>
      {nofooter ? null : <Footer />}
    </StyledThemeProvider>
  );
};

export default Layout;
