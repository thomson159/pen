import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../layouts";
import SEO from "../components/seo";
import BG from "../components/bg";
import { useTranslation } from "react-i18next";
import "../i18n";
import i18n from "../i18n";

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 3rem;
  }
`;

const StyledBodyTitle = styled.h1`
  font-size: 60px;
  white-space: wrap;
  overflow-wrap: normal;
  margin: 0rem 0 1rem 0;

  @media (max-width: 640px) {
    font-size: 56px;
  }
`;

const StyledBodySubTitle = styled.h2`
  line-height: 125%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

const StyledBodySubTitleZero = styled(StyledBodySubTitle)`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const StyledBodySubText = styled.h3`
  text-align: justify;
  line-height: 140%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`;

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 961px) {
    flex-direction: row;
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 24px;
    }
  }
`;

const StyledItemColumn = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const StyledTradeButton = styled.button`
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  font-size: 18px;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: white;
  border-radius: 12px;
  display: inline-block;
  font-weight: 500;
  width: min-content;
  white-space: nowrap;
  // border: 1px solid ${({ theme }) => theme.colors.link};
  border: none;

  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme }) => `linear-gradient(
    128.17deg,
    ${theme.colors.link} -14.78%,
    ${theme.backgroundColor} 110.05%
  )`};

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

const StyledTextArea = styled.textarea`
  resize: vertical;
  max-height: 400px;
  min-height: 100px;
  margin-right: 1rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey9};
  background-color: transparent;
  position: relative;
  font-weight: 500;
  outline: none;
  width: 100%;
  border: none;
  float: left;
  font-size: 18px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  border-bottom: 1px solid;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
  }
`;

const StyledInput = styled.input`
  margin-right: 1rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey9};
  background-color: transparent;
  position: relative;
  font-weight: 500;
  outline: none;
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  float: left;
  font-size: 24px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  border-bottom: 1px solid;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
  }
`;

const IndexPage = (props) => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(props.pageContext.language);
  // }, [props.pageContext.language]);

  return (
    <Layout path={props.location.pathname}>
      <SEO title="Home" path={props.location.pathname} description="" />
      <BG />
      <StyledBody>
        <StyledMargin>
          <StyledItemRow style={{ marginBottom: "2rem" }}>
            <StyledItemColumn>
              <StyledBodyTitle>{t("slogan")}</StyledBodyTitle>
            </StyledItemColumn>
          </StyledItemRow>
        </StyledMargin>
        <EcosystemSection language={props.pageContext.language} />
        <ContactSection language={props.pageContext.language} />
      </StyledBody>
    </Layout>
  );
};

export default IndexPage;

const StyledSectionHeader = styled.h1`
  font-size: 22px;
  white-space: wrap;
  overflow-wrap: normal;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    text-align: left;
  }
`;

const StyledMargin = styled.div`
  margin: 2.5rem 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
`;

const EcosystemSection = ({ language }) => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language]);

  return (
    <StyledSection>
      <StyledItemRow>
        <StyledItemColumn>
          <StyledBodySubText>{t("ecosystem.promo_1")}</StyledBodySubText>
          <StyledBodySubText>{t("ecosystem.promo_2")}</StyledBodySubText>
          <StyledSectionHeader>{t("ecosystem.price")}</StyledSectionHeader>
        </StyledItemColumn>
        <StyledItemColumn></StyledItemColumn>
      </StyledItemRow>
      <StyledItemRow style={{ marginTop: "4rem" }}>
        <StyledItemColumn></StyledItemColumn>
        <StyledItemColumn>
          <StyledSectionHeader>{t("ecosystem.title_1")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_1")}</StyledBodySubText>
          <StyledBodySubText>{t("ecosystem.desc_2")}</StyledBodySubText>
          <StyledBodySubText>{t("ecosystem.desc_3")}</StyledBodySubText>
        </StyledItemColumn>
      </StyledItemRow>
      <StyledItemRow>
        <StyledItemColumn>
          <StyledSectionHeader>{t("ecosystem.title_2")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_4")}</StyledBodySubText>
          <StyledSectionHeader>{t("ecosystem.title_3")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_5")}</StyledBodySubText>
          <StyledSectionHeader>{t("ecosystem.title_4")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_6")}</StyledBodySubText>
          <StyledSectionHeader>{t("ecosystem.title_5")}</StyledSectionHeader>
          <StyledItemRow>
            <StyledItemColumn>{t("ecosystem.tech_1")}</StyledItemColumn>
            <StyledItemColumn>{t("ecosystem.tech_2")}</StyledItemColumn>
          </StyledItemRow>
        </StyledItemColumn>
        <StyledItemColumn></StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  );
};

const StyledExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  width: 100%;
  cursor: pointer;
  :focus {
    outline: 0;
    opacity: 0.9;
  }
  :hover {
    * {
      color: ${({ theme }) => theme.colors.grey5};
    }
  }
`;

const ContactSection = ({ language }) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [can, setCan] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    setCan(false);

    // emailjs
    //   .sendForm(
    //     "service_1cm0bwh",
    //     "template_a4pcz23",
    //     form.current,
    //     "eSz_GZMKvVtJvnGWk"
    //   )
    //   .then(
    //     (result) => {
    //       setStatus(result.text);
    //       setCan(true);
    //       form.current.reset();
    //     },
    //     (error) => {
    //       setStatus(error.text);
    //       setCan(true);
    //     }
    //   );
  };

  const { t } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language]);

  return (
    <StyledSection>
      <StyledItemRow style={{ marginBottom: "2rem" }}>
        <StyledItemColumn style={{ minWidth: "255px", width: "auto" }}>
          <StyledBodySubTitle>
            {t("contact_1")}
            <br />
            <StyledExternalLink
              style={{ fontSize: 18 }}
              // href={"mailto:contact@web2app.app"}
            >
              contact@
            </StyledExternalLink>
          </StyledBodySubTitle>
        </StyledItemColumn>
        <StyledItemColumn>
          {status !== "" && (
            <StyledBodySubTitleZero>
              <span style={{ color: status == "OK" ? "green" : "red" }}>
                {" "}
                {status == "OK" ? t("thank") : status}
              </span>
            </StyledBodySubTitleZero>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <StyledInput
              required={true}
              type="email"
              placeholder={t("email")}
              name="from_name"
              autoComplete="off"
            />
            <StyledTextArea
              name="message"
              required={true}
              type="text"
              rows={5}
              placeholder={t("message")}
            />
            <input required={true} type="checkbox" />
            <span
              style={{
                fontSize: 15,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 10,
              }}
            >
              {t("accept")}{" "}
              <a target="_black" href="/privacy">
                {" "}
                {t("policy")}
              </a>
            </span>
            <br />
            <StyledTradeButton
              style={{ marginTop: 18 }}
              type="submit"
              disabled={!can}
            >
              {t("send")}
            </StyledTradeButton>
          </form>
        </StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  );
};
