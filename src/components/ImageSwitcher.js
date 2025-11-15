import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function ImageSwitcher({ images }) {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Wrapper onClick={handleClick}>
      {/* <Title>{images[index].title}</Title> */}
      {images.map((img, i) => (
        <Image key={i} src={img.src} alt={img.title} visible={i === index} />
      ))}
      {/* <Hint>{t("clickPhoto")}</Hint> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1.45rem;

  @media (max-width: 640px) {
    height: auto;
    padding-top: 130%;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 2;
  user-select: none;
  pointer-events: none;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
  user-select: none;

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`;

const Hint = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  pointer-events: none;
`;
