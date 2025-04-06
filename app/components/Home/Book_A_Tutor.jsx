"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import bookTutor from "@/public/Images/bookTutor.png";
import Button from "@mui/material/Button";

const BookTutorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {

  }

  @media (min-width: 1280px) {

  }
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1135px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-family: "Lexend", sans-serif;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const HeadingMain = styled.h1`
    font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
  }
  @media (min-width: 1536px) {
    font-size: 48px;
  }
`;

const Heading = styled.h2`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-family: "sans", sans-serif;

  font-size: 14px;

  max-width: 422px;
  line-height: 164%;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: none;
    border-radius: 12px;
    background-color:rgb(255, 255, 255);
    color: #025DE9;
    transition: all 0.3s ease;
    }
    @media (min-width: 768px) {
    border-radius: 16px;
      padding: 14px 36px;
      font-size: 16px;
    }
`;

const Book_A_Tutor = () => {
  return (
    <BookTutorContainer className="section-padding-x">
      <StyledImage
        src={bookTutor}
        alt="Book a tutor"
        width={1200}
        height={400}
        priority
      />
      <ContentWrapper>
        <HeadingMain>Book a Tutor in  province</HeadingMain>
        <Heading>Ready to find the perfect tutor?</Heading>
        <Description>
          Browse our top-rated tutors in province right & book your first
          session with Prep2Perfection
        </Description>
        <StyledButton variant="contained" size="">
          Get A Tutor Now
        </StyledButton>
      </ContentWrapper>
    </BookTutorContainer>
  );
};

export default Book_A_Tutor;