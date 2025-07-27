import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Menu from "./menu";
import MenuIcon from "../images/menu.inline.svg";
import CloseIcon from "../images/x.inline.svg";
import { Sun, Moon } from "react-feather";
import { useDarkMode } from "../contexts/Application";
import useDocumentScrollThrottled from "../utils/useDocumentScrollThrottled";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  width: 100%;
  z-index: 3;
  position: sticky;
  top: -1px;
  background: ${({ theme, open, showBG }) =>
    showBG && !open ? theme.backgroundColor : "none"};
  border-bottom: 1px solid
    ${({ theme, open, showBG }) =>
      showBG && !open ? theme.concreteGray : "none"};
  transition: background-color 0.25s ease;

  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
  }
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  transition: right 0.25s ease;
  @media (max-width: 960px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? "0px" : "-100%")};
    align-items: flex-start;
    flex-wrap: wrap;
    -webkit-overflow-scrolling: touch;
    background-color: ${({ theme }) => theme.colors.grey1};
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 2rem;
    overflow: auto;
    box-shadow: ${({ theme }) => theme.shadows.huge};
  }
  > * + * {
    margin-left: 24px;
  }
  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  color: ${({ theme }) => theme.textColor};
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;
  padding: 0px;
  :focus {
    outline: none;
  }
  @media (max-width: 960px) {
    display: initial;
    position: ${({ open }) => (open ? "fixed" : "relative")};
    right: ${({ open }) => (open ? "1.5rem" : "initial")};
    top: ${({ open }) => (open ? "1.5rem" : "initial")};
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`;

const Header = () => {
  const matches = useMediaQuery("only screen and (max-width: 1024px)");
  const node = useRef();
  const button = useRef();
  const [isMenuOpen, updateIsMenuOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [headerBG, setHeaderBG] = useState(false);

  useDocumentScrollThrottled(({ currentScrollTop }) => {
    setHeaderBG(currentScrollTop > 2);
  });

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menulinks {
            name
            link
            target
          }
        }
      }
    }
  `);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "-webkit-fill-available";
    }
    return () => (document.body.style.overflow = originalStyle);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        node.current.contains(e.target) ||
        button.current.contains(e.target)
      ) {
        return;
      }
      updateIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, matches]);

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <StyledHeader open={isMenuOpen} showBG={headerBG}>
      <MenuToggle
        ref={button}
        open={isMenuOpen}
        onClick={() => updateIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
      </MenuToggle>
      <StyledNav ref={node} open={isMenuOpen}>
        {data.site.siteMetadata.menulinks.map((item) => (
          <Menu key={item.name} data={item} />
        ))}
        <StyledButton type="button" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => changeLang(currentLang === "en" ? "pl" : "en")}
        >
          {currentLang.toUpperCase()}
        </StyledButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
