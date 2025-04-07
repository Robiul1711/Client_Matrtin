"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bannerLayer from "@/public/Images/bannerLayer.png";
import { Button } from "@mui/material";
const BannerContainer = styled.section`
  font-family: 'Lexend', sans-serif;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BannerImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;

  @media (min-width: 640px) {
    height: 600px;
  }

  @media (min-width: 1024px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 1070px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 10;

  @media (min-width: 1280px) {
    backdrop-filter: none;
    background-color: transparent;
  }
`;

const BannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 60%;
  width: 100%;
  padding: 0 1rem;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 20;

  @media (min-width: 640px) {
    top: 50%;
    padding: 0 1.25rem;
  }

  @media (min-width: 768px) {
    max-width: 1170px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    top: 50%;
  }

  @media (min-width: 1280px) {
    top: 30%;
  }
`;

const BannerHeading = styled.h1`
  font-family: 'Lexend', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  @media (min-width: 640px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 36px;
    color: #111827;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }

  @media (min-width: 1440px) {
    font-size: 52px;
  }
`;

const PrimaryText = styled.span`
  color: #025DE9;
`;

const BannerText = styled.p`
  font-family: 'Sans', sans-serif;
  margin: 1.25rem 0;
  font-size: 0.875rem;
  color: #000;
  max-width: 785px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1280px) {
    color: #6b7280;
  }
`;
const StyledButton = styled(Button)`
  && {
    background-color: #025DE9;
    color: white;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    margin-top: 1rem;
    
    &:hover {
      background-color: #0148b8;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 768px) {
      padding: 14px 36px;
      font-size: 16px;
    }
  }
`;
const Banner = () => {
  return (
    <BannerContainer id="home">
      <BannerImageWrapper>
        <Overlay />
        <BannerImage 
          src={bannerLayer} 
          alt="Tutoring banner" 
          fill
          priority
        />
      </BannerImageWrapper>

      <ContentWrapper>
        <BannerHeading>
          Find the Best Tutors in <PrimaryText>province</PrimaryText> – Private or Online Lessons Tailored to Your Needs
        </BannerHeading>
        <BannerText>
          from <PrimaryText>Cities</PrimaryText>, Grades 8 to 12 Maths,
          English, geography, And Science Tutors In Province For <PrimaryText>Private</PrimaryText>, Online, Specialised University or Business Tutoring
        </BannerText>
        <StyledButton>Get A Tutor Now</StyledButton>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default Banner;