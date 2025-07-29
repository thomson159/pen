import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, title, path }) {
  //removed siteUrl
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const uniTitle = "Unique Pen";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`${site.siteMetadata.title} | %s`}
      titleTemplate={`%s`}
    >
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={title}></meta>
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="gray"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="gray"
      />

      <meta property="og:title" content={uniTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={"website"} />
      {/* <meta property="og:url" content={site.siteMetadata.siteUrl + path} /> */}
      {/* <meta property="og:image" content={`${site.siteMetadata.siteUrl}${path ? path : '/images/'}twitter-card.png`} /> */}

      <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Symbol of transforming weapons into words`,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
