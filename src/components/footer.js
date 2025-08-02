import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "../i18n";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  padding: 2rem;

  @media (max-width: 960px) {
    padding: 1rem;
  }
`;

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  justify-content: space-between;
  width: 100%;
`;

const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

const StyledFooterLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  margin-right: 16px;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledFooterLinkSection>
        <StyledFooterSection>
          <p style={{ margin: 0, marginRight: 20 }}>
            © {new Date().getFullYear()}
          </p>
          <StyledFooterLink
            style={{
              marginRight: 16,
              whiteSpace: "nowrap",
            }}
            to="/privacy"
          >
            {t("policy")}
          </StyledFooterLink>
        </StyledFooterSection>
      </StyledFooterLinkSection>
    </StyledFooter>
  );
};

export default Footer;
