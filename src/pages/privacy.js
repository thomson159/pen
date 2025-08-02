import React from "react";
import styled from "styled-components";
import Layout from "../layouts";
import { useTranslation } from "react-i18next";
import BG from "../components/bg";
import SEO from "../components/seo";
import "../i18n";

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto 10rem auto;
  padding: 0 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0 1rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const PrivacyPolicy = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Layout>
      <SEO title={t("policy")} path={props.location.pathname} lang={lang} />
      <BG />
      <Wrapper>
        <Title>{t("policy")}</Title>
        <Paragraph>{t("privacy.2")}</Paragraph>
        <Paragraph>{t("privacy.3")}</Paragraph>
        <Subtitle>{t("privacy.4")}</Subtitle>
        <Paragraph>{t("privacy.5")}</Paragraph>
        <Paragraph>{t("privacy.6")}</Paragraph>
        <Paragraph>{t("privacy.7")}</Paragraph>
        <Paragraph>{t("privacy.8")}</Paragraph>
        <Subtitle>{t("privacy.9")}</Subtitle>
        <Paragraph>{t("privacy.10")}</Paragraph>
        <Paragraph>{t("privacy.11")}</Paragraph>
        <Paragraph>{t("privacy.12")}</Paragraph>
        <Paragraph>{t("privacy.13")}</Paragraph>
        <Paragraph>{t("privacy.14")}</Paragraph>
        <Subtitle>{t("privacy.15")}</Subtitle>
        <Paragraph>{t("privacy.16")}</Paragraph>
        <Paragraph>{t("privacy.17")}</Paragraph>
        <Paragraph>{t("privacy.18")}</Paragraph>
        <Paragraph>{t("privacy.19")}</Paragraph>
        <Paragraph>{t("privacy.20")}</Paragraph>
        <Paragraph>{t("privacy.21")}</Paragraph>
        <Subtitle>{t("privacy.22")}</Subtitle>
        <Paragraph>{t("privacy.23")}</Paragraph>
        <Paragraph>{t("privacy.24")}</Paragraph>
        <Paragraph>{t("privacy.26")}</Paragraph>
        <Paragraph>{t("privacy.27")}</Paragraph>
        <Paragraph>{t("privacy.28")}</Paragraph>
        <Paragraph>{t("privacy.29")}</Paragraph>
        <Paragraph>{t("privacy.291")}</Paragraph>
        <Subtitle>{t("privacy.30")}</Subtitle>
        <Paragraph>{t("privacy.31")}</Paragraph>
        <Paragraph>{t("privacy.32")}</Paragraph>
        <Paragraph>{t("privacy.33")}</Paragraph>
        <Paragraph>{t("privacy.34")}</Paragraph>
        <Paragraph>{t("privacy.35")}</Paragraph>
        <Paragraph>{t("privacy.36")}</Paragraph>
        <Subtitle>{t("privacy.37")}</Subtitle>
        <Paragraph>{t("privacy.38")}</Paragraph>
        <Subtitle>{t("privacy.39")}</Subtitle>
        <Paragraph>{t("privacy.40")}</Paragraph>
        <Subtitle>{t("privacy.41")}</Subtitle>
        <Paragraph>{t("privacy.42")}</Paragraph>
        <Subtitle>{t("privacy.43")}</Subtitle>
        <Paragraph>{t("privacy.44")}</Paragraph>
        <Paragraph>{t("privacy.45")}</Paragraph>
        <Paragraph>{t("privacy.46")}</Paragraph>
        <Paragraph>{t("privacy.47")} contact@243pen.store.</Paragraph>
        <Paragraph>{t("privacy.48")}</Paragraph>
        <Paragraph>{t("privacy.49")}</Paragraph>
        <Subtitle>{t("privacy.50")}</Subtitle>
        <Paragraph>{t("privacy.51")}</Paragraph>
        <Paragraph>{t("privacy.52")}</Paragraph>
        <Paragraph>{t("privacy.53")}</Paragraph>
        <Subtitle>{t("privacy.54")}</Subtitle>
        <Paragraph>{t("privacy.55")}</Paragraph>
        <Subtitle>{t("privacy.56")}</Subtitle>
        <Paragraph>{t("privacy.57")} contact@243pen.store.</Paragraph>
      </Wrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
