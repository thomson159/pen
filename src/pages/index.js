import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../layouts";
import SEO from "../components/seo";
import BG from "../components/bg";
import { useTranslation } from "react-i18next";
import "../i18n";
import photo1 from "../images/img1_optimized.jpg";
import photo2 from "../images/img2_optimized.jpg";
import photo3 from "../images/img3_optimized.jpg";
import photo5 from "../images/img5_optimized.jpg";
import photo6 from "../images/img6_optimized.jpg";
import ImageSwitcher from "../components/ImageSwitcher";
import emailjs from "@emailjs/browser";
import ModelScene from "../components/ModelScene";
import { Element } from "react-scroll";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;

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
  font-size: 56px;
  white-space: wrap;
  overflow-wrap: normal;
  margin: 0rem 0 1rem 0;

  @media (max-width: 640px) {
    font-size: 52px;
  }
`;

const StyledBodySlogan = styled.h3`
  text-align: center;
  font-size: 52px;
  white-space: wrap;
  overflow-wrap: normal;
  margin: 0rem 0 1rem 0;

  @media (max-width: 640px) {
    font-size: 34px;
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
  margin-bottom: 2rem;
  font-weight: bold;
`;

const StyledBodySubText = styled.h3`
  font-size: 18px;
  line-height: 140%;
  opacity: 0.8;
`;

const StyledItemRow = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (min-width: 961px) {
    flex-direction: row;

    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

const StyledItemColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTradeButton = styled.button`
  max-width: 120px;
  height: 40px;
  opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
  font-size: 18px;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  color: white;
  border-radius: 2px;
  width: 100%;
  white-space: nowrap;
  border: none;
  margin-top: 2rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  background: linear-gradient(128.17deg, gray -14.78%, #b8860b 110.05%);

  :hover {
    animation: ${pulse} 0.5s ease-out;
  }

  :focus {
    outline: none;
    opacity: 0.9;
  }

  box-shadow: ${({ theme }) => theme.shadows.small};
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
`;

const IndexPage = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Layout>
      <SEO title={t("title")} path={props.location.pathname} lang={lang} />
      <BG />
      <StyledBody>
        <StyledSlogan>
          <StyledItemRow>
            <StyledItemColumn>
              <StyledBodyTitle>{t("ecosystem.title_1")}</StyledBodyTitle>
              <StyledBodySubText>{t("ecosystem.desc_1")}</StyledBodySubText>
              <StyledBodySubText>{t("ecosystem.desc_2")}</StyledBodySubText>
            </StyledItemColumn>
            <StyledItemColumn>
              <ModelScene />
            </StyledItemColumn>
          </StyledItemRow>
        </StyledSlogan>
        <EcosystemSection />
        <StyledItemRow style={{ marginBottom: "4rem" }}>
          <StyledItemColumn>
            <StyledBodySlogan>{t("slogan")}</StyledBodySlogan>
          </StyledItemColumn>
        </StyledItemRow>
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
  }
`;

const StyledSlogan = styled.div`
  min-height: calc(100vh - 157px);
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const StyledDiv = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  max-width: 650px;
  margin: 4rem auto;
  text-align: center;
`;

const EcosystemSection = () => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <StyledItemRow>
        <StyledItemColumn>
          <ImageSwitcher
            images={[
              // { src: photo1, title: t("row") },
              { src: photo2, title: t("polished") },
            ]}
          />
        </StyledItemColumn>
        <StyledItemColumn>
          {/* <StyledSectionHeader>{t("ecosystem.title_2")}</StyledSectionHeader> */}
          {/* <StyledBodySubText>{t("ecosystem.desc_4")}</StyledBodySubText> */}
          <StyledSectionHeader>{t("ecosystem.title_3")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_5")}</StyledBodySubText>
        </StyledItemColumn>
      </StyledItemRow>
      <StyledItemRow>
        <StyledItemColumn style={{ marginBottom: "4rem" }}>
          <StyledSectionHeader>{t("ecosystem.title_4")}</StyledSectionHeader>
          <StyledBodySubText>{t("ecosystem.desc_6")}</StyledBodySubText>
          <StyledSectionHeader style={{ marginBottom: 0 }}>
            🇵🇱 Made in Poland
          </StyledSectionHeader>
          <div style={{ marginBottom: "1.45rem" }}>
            {t("ecosystem.title_5")}
          </div>
          <div>{t("ecosystem.tech_1")}</div>
        </StyledItemColumn>
        <StyledItemColumn>
          <ImageSwitcher
            images={[
              { src: photo3, title: t("polished") },
              { src: photo5, title: t("polished") },
              { src: photo6, title: t("polished") },
            ]}
          />
        </StyledItemColumn>
      </StyledItemRow>
      <StyledDiv>
        <StyledSectionHeader>
          <div style={{ fontSize: 28 }}>219 PLN - 69 USD - 59 EUR</div>
          {t("setPriceHeader")}
        </StyledSectionHeader>
        {t("setContents")}
        <StyledSectionHeader style={{ marginBottom: 0 }}>
          {t("shippingPoland")}
        </StyledSectionHeader>
        {t("shippingAbroad")}
      </StyledDiv>
    </StyledSection>
  );
};

const StyledExternalLink = styled.a`
  font-size: 1.15rem;
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

const Loader = styled.span`
  border: 2px solid #ccc;
  border-top: 2px solid #333;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
  vertical-align: middle;
`;

const ContactSection = ({ language }) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [can, setCan] = useState(true);
  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setCan(false);
    setStatus("");

    const SERVICE = process.env.GATSBY_SERVICE;
    const TEMPLATE = process.env.GATSBY_TEMPLATE;
    const KEY = process.env.GATSBY_KEY;

    emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY).then(
      (result) => {
        setStatus(result.text);
        setCan(true);
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        setStatus(error.text);
        setCan(true);
        console.error(error.text);
      }
    );
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Element name="kontakt">
      <StyledSection>
        <StyledItemRow style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <StyledItemColumn
            style={{ minWidth: "255px", width: "auto", marginBottom: "2rem" }}
          >
            <StyledBodySubTitle>
              📬 {t("contact_1")}
              <StyledExternalLink href={"mailto:contact@243pen.store"}>
                contact@243pen.store
              </StyledExternalLink>
            </StyledBodySubTitle>
            {t("info")}
          </StyledItemColumn>
          <StyledItemColumn>
            {status !== "" && (
              <StyledBodySubTitleZero>
                <span style={{ color: status === "OK" ? "orange" : "red" }}>
                  {status === "OK" ? t("thank") : status}
                </span>
              </StyledBodySubTitleZero>
            )}
            <form ref={form} onSubmit={sendEmail} style={{ margin: 0 }}>
              <StyledInput
                required={true}
                type="email"
                placeholder={t("email")}
                name="email"
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
              <div
                style={{
                  width: "100%",
                  position: "relative",
                }}
              >
                <StyledTradeButton type="submit" disabled={!can}>
                  {can ? t("send") : <Loader />}
                </StyledTradeButton>
              </div>
            </form>
          </StyledItemColumn>
        </StyledItemRow>
      </StyledSection>
    </Element>
  );
};
