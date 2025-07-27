import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((s) => !s), []);
  return [state, toggle];
}

const StyledMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 960px) {
    font-size: 1.5rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grey7};
    @media (max-width: 960px) {
      color: ${({ theme }) => theme.textColor};
    }
  }

  &:focus {
    outline: none;
    @media (max-width: 960px) {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

const StyledMenuTitle = styled.span`
  font-size: 1.15rem;
  font-weight: 400;
  padding: 0 0 0.2rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grey7};
  }

  a:focus {
    opacity: 0.5;
  }

  @media (max-width: 960px) {
    margin-bottom: 1rem;
    user-select: none;
  }

  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
`;

const StyledLinkBase = `
  white-space: nowrap;
  display: block;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};

  &:focus {
    outline: 0;
    opacity: 0.9;
  }

  &:hover * {
    color: ${({ theme }) => theme.colors.grey5};
  }
`;

const StyledExternalLink = styled(Link)`
  ${StyledLinkBase}
`;

const StyledExternalLink2 = styled.a`
  ${StyledLinkBase}
`;

export default function Menu({ data }) {
  const { t } = useTranslation();

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  const content = data.link ? (
    <StyledExternalLink to={data.link} target={data.target}>
      {t(data.name)}
    </StyledExternalLink>
  ) : (
    <StyledExternalLink2
      onClick={scrollToBottom}
      style={{ whiteSpace: "nowrap" }}
    >
      {t(data.name)}
    </StyledExternalLink2>
  );

  return (
    <StyledMenu tabIndex={0}>
      <StyledMenuTitle>{content}</StyledMenuTitle>
    </StyledMenu>
  );
}
