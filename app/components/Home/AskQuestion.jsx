"use client"
import React, { useState } from "react";
import styled from "styled-components";

const AskQuestionContainer = styled.div`
  font-family: 'Lexend', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
     margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1440px) {
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;
   
  }
`;
const LeftColumn = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
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
const RightColumn = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;


const AccordionItem = styled.section`
  padding: 0.75rem;
  background-color: #f2f7fe;
  border-radius: 24px;
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 1.25rem;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const AccordionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
  @media (min-width: 1280px) {
    font-size: 1.125rem;
  }
`;


const AccordionIcon = styled.svg`
  color: #01046b;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
`;

const AccordionContent = styled.div`
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  margin-top: ${({ $isOpen }) => ($isOpen ? "1.5rem" : "0")};
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FeatureText = styled.p`
  color: #4b5563;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;


const AskQuestion = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const accordionData = [
    {
      title: "How much does a tutor cost in province?",
      features: [
        "Serve millions of developers without overwhelming your infrastructure.",
        "Reach developers worldwide without compromising your business model.",
        "Faster developer onboarding without additional operational overhead.",
        "Serve more traffic at scale without additional infrastructure costs."
      ]
    },
    {
      title: "Are private tutors worth it?",
      features: [
        "Reduce time-to-market for new features and services.",
        "Leverage our global infrastructure for instant scalability.",
        "Eliminate costly infrastructure investments."
      ]
    },
    {
      title: "Secure APIs",
      features: [
        "Built-in compliance with industry standards.",
        "End-to-end encryption for all data transfers.",
        "Regular security audits and penetration testing."
      ]
    },
    {
      title: "What if the tutor I want is not available in my city/town/area?",
      features: [
        "No upfront costs or long-term commitments.",
        "Volume discounts for high-usage customers.",
        "Predictable billing with no hidden fees."
      ]
    },
    {
      title: "How do I know which tutor is best for me?",
      features: [
        "No upfront costs or long-term commitments.",
        "Volume discounts for high-usage customers.",
        "Predictable billing with no hidden fees."
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <AskQuestionContainer className="section-padding-x">
      <LeftColumn>
      <Heading>
          Frequently Asked Questions about Tutors in <HeadingSpan>province</HeadingSpan> 
        </Heading>
      </LeftColumn>
      
      <RightColumn>
        <AccordionContainer>
          {accordionData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => toggleAccordion(index)}>
                <AccordionTitle>{item.title}</AccordionTitle>
                <AccordionIcon
                  $isOpen={expandedAccordion === index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.39839 4.46617H16.6276C16.7717 4.46663 16.9129 4.50636 17.0361 4.5811C17.1592 4.65584 17.2597 4.76275 17.3266 4.89033C17.3935 5.01791 17.4244 5.16132 17.4159 5.30513C17.4073 5.44895 17.3598 5.58771 17.2782 5.70649L10.1636 15.9832C9.86875 16.4093 9.15886 16.4093 8.86321 15.9832L1.74859 5.70649C1.66623 5.58796 1.61794 5.44912 1.60895 5.30507C1.59997 5.16102 1.63063 5.01726 1.69761 4.88941C1.76459 4.76156 1.86533 4.65451 1.98887 4.57989C2.11242 4.50528 2.25406 4.46595 2.39839 4.46617Z"
                  />
                </AccordionIcon>
              </AccordionHeader>

              <AccordionContent $isOpen={expandedAccordion === index}>
                <FeatureList>
                  {item.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}
                </FeatureList>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </RightColumn>
    </AskQuestionContainer>
  );
};


export default AskQuestion;