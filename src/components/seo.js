import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ lang, title, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const keywordsPL =
    "długopis z łusek, długopis z łuski kalibru .243, ręcznie robiony długopis, długopis kolekcjonerski, długopis z naboju, personalizowany długopis, unikalny długopis, prezent dla mężczyzny, prezent dla kolekcjonera, premium długopis, sklep z długopisami";
  const keywordsEN =
    "shell pen, .243 caliber shell pen, handmade pen, collectible pen, cartridge pen, personalized pen, unique pen, gift for man, gift for collector, premium pen, pen store";

  const metaKeywords = lang === "pl" ? keywordsPL : keywordsEN;

  const descriptions = {
    pl:
      "Ręcznie robione, ekskluzywne długopisy z używanych łusek. Unikalne połączenie rzemiosła i historii. Idealny prezent.",
    en:
      "Handcrafted, exclusive pens made from fired bullet casings. A unique blend of craftsmanship, history, and elegance. Perfect as a gift.",
  };

  const metaDescription = descriptions[lang] || descriptions.en;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | 243Pen.store`}
      titleTemplate={`%s`}
    >
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={"website"} />
      <meta property="og:url" content={site.siteMetadata.siteUrl + path} />

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
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  path: PropTypes.string,
};

export default SEO;
