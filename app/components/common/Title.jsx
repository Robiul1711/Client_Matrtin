import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.h1`
  font-family: 'Lexend', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;

const PrimarySpan = styled.span`
  color: ${({ theme }) => theme.colors.primary || '#025DE9'};
  font-family: 'Lexend', sans-serif;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;

const RegularSpan = styled.span`
  font-family: 'Lexend', sans-serif;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;

const Title = ({ title1, title2, title3, className }) => {
  return (
    <TitleContainer className={className}>
      {title1}
      {title2 && <PrimarySpan> {title2}</PrimarySpan>}
      {title3 && <RegularSpan> {title3}</RegularSpan>}
    </TitleContainer>
  );
};

export default Title;