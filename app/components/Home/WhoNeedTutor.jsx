"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import student from "@/public/Images/student.png";
import tiq from "@/public/Images/tiq.png";
import { Button } from "@mui/material";

const WhyChooseContainer = styled.div`
margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Lexend', sans-serif;
  @media (min-width: 650px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    flex-wrap: nowrap;
    gap: 4rem;
  }

  @media (min-width: 1440px) {
    margin-top: 7.5rem;
    gap: 8.125rem;
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1536px) {
    font-size: 48px;
  }
`;
const HeadingSpan = styled.span`
  color: #025DE9;
  font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1536px) {
    font-size: 48px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const InfoCard = styled.div`
  position: absolute;
  left: 2.5rem;
  bottom: -50%;
  transition: all 0.5s ease-in-out;
  text-align: center;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors || '#025DE9'};

  ${ImageContainer}:hover & {
    bottom: 2.5rem;
  }
`;

const CardTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 16px;
`;

const CardValue = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #025DE9;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    border-radius: 16px;
    transition: all 0.3s ease;

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


const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 768px) {
    width: 50%;
    gap: 2.5rem;
  }
`;
const BenefitsTitle = styled.p`
  color: ${({ theme }) => theme.colors || '#6b7280'};
  font-weight: 600;
  margin-top: 0.25rem;

  span {
    color: ${({ theme }) => theme.colors || '#025DE9'};
  }
`;

const TutorFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeatureIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const FeatureTitle = styled.h1`
  font-family: 'Lexend', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const tutorData = [
  {
    id: 1,
    title: "Students aiming to improve grades or prepare for exams.",
  },
  {
    id: 2,
    title: "Adults pursuing professional development.",
  },
  {
    id: 3,
    title: "Learners wanting to master new skills or languages.",
  },
  {
    id: 4,
    title: "Parents looking to support their children’s education.",
  },
];

const WhoNeedTutor = () => {
  return (
    <WhyChooseContainer id="become-a-tutor">
      <ImageContainer>
        <StyledImage 
          src={student} 
          alt="Tutor" 
          width={600} 
          height={400}
          priority
        />
        <InfoCard>
          <CardValue>100%</CardValue>
          <CardTitle>Pass Rate 2022</CardTitle>
        </InfoCard>
      </ImageContainer>
      <ContentContainer>
      <Heading>Who Needs a Tutor in <HeadingSpan>province?</HeadingSpan> </Heading>
        
        <div>
        <DescriptionText>
        Tutoring isn't just for struggling students. People seek tutors for various reasons, including:
          </DescriptionText>
         
        </div>

        {tutorData.map((item) => (
          <TutorFeature key={item.id}>
            <FeatureIcon src={tiq} alt="Check icon" width={24} height={24} />
            <FeatureTitle>{item.title}</FeatureTitle>
          </TutorFeature>
        ))}
     <div>
        <DescriptionText>
        No matter your motivation, Prep2Perfection has a tutor solution tailored to your needs.
          </DescriptionText>
         
        </div>
        <StyledButton >Book A Tutor Right Here</StyledButton>
      </ContentContainer>
    </WhyChooseContainer>
  );
};

export default WhoNeedTutor;