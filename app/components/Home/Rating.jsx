"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Google from '@/public/Images/Google.png';
import Trustpilot from '@/public/Images/Trustpilot.png';
import Instagram from '@/public/Images/Instagram.png';
import { FaStar } from 'react-icons/fa';

const RatingContainer = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
font-family: 'Lexend', sans-serif;
  @media (min-width: 650px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 3.75rem;

  }
  @media (min-width: 768px) {
    padding-top: 5rem;
    
  }

  @media (min-width: 1280px) {
    padding-top: 7.5rem;
   
  }
`;

const RatingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  @media (min-width: 640px) {
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 4rem;
  }

  @media (min-width: 1280px) {
    gap: 8.25rem;
  }
`;

const RatingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const RatingImage = styled(Image)`
  width: 5rem;
  height: auto;

  @media (min-width: 640px) {
    width: 7rem;
  }

  @media (min-width: 768px) {
    width: 8rem;
  }

  @media (min-width: 1024px) {
    width: 10rem;
  }

  @media (min-width: 1280px) {
    width: 14rem;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const StarIcon = styled(FaStar)`
  color: #fbbf24;
`;

const RatingTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  } 
`;

const SecondaryText = styled.span`
  color: #6b7280;
  font-size: 1rem;
`;

const SubjectsSection = styled.div`
  margin-top: 2.5rem;
  text-align: center;

  @media (min-width: 640px) {
    margin-top: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 1280px) {
    margin-top: 6.25rem;
  }
`;
const SubjectsHeading = styled.h2`
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
const Span = styled.span`
  color: #025de9;
`;
const SubjectsDescription = styled.p`
  margin-top: 1.5rem;
    font-family: 'sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  max-width: 1316px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ratingData = [
  {
    id: 1,
    img: Google,
    star: 5,
    title: "4.8/5",
  },
  {
    id: 2,
    img: Trustpilot,
    star: 5,
    title: "4.8/5",
  },
  {
    id: 3,
    img: Instagram,
    star: 5,
    title: "4.8/5",
  },
];

const Rating = () => {
  return (
    <RatingContainer id='reviews'>
      <RatingGrid>
        {ratingData.map((item) => (
          <RatingCard key={item.id}>
            <RatingImage 
              src={item.img} 
              alt={`${item.img} rating`} 
              width={200} 
              height={80}
            />
            <StarsContainer>
              {[...Array(item.star)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </StarsContainer>
            <RatingTitle>
              {item.title} <SecondaryText>Customer rating</SecondaryText>
            </RatingTitle>
          </RatingCard>
        ))}
      </RatingGrid>

      <SubjectsSection>
        <SubjectsHeading>Tutors in <Span>province</Span>: Available Subjects</SubjectsHeading>
        <SubjectsDescription>
          Our province tutors provide support across a wide range of subjects. Mathematics tutoring spans primary to advanced levels, helping learners build strong foundations and confidence. Science support covers Physics, Chemistry, and Biology, simplifying complex concepts. Language tutoring includes English, Afrikaans and all of SA's beautiful languages (plus most international ones) to improve literacy and communication. Commerce students can benefit from Accounting and Business Studies tutoring, while those interested in technology can develop Computer Science and IT skills. We also offer targeted exam preparation for Grade 8 to Matric in CAPS (NSC), IEB, Cambridge, NBTs and SATs, as well as university-level tutoring and support for lifelong learning.
        </SubjectsDescription>
      </SubjectsSection>
    </RatingContainer>
  );
};

export default Rating;