import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ImageSwitcher({ img1, img2 }) {
  const [showAlt, setShowAlt] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [showAlt]);

  return (
    <Wrapper onClick={() => setShowAlt(!showAlt)}>
      <StyledImg
        src={showAlt ? img2 : img1}
        $fade={fade}
        key={showAlt ? "img2" : "img1"}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 500px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s ease-in-out;
  opacity: 1;

  @media (max-width: 640px) {
    padding-left: 0;
  }

  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    filter: brightness(0.9);
    transform: scale(1.01);
  }
`;
