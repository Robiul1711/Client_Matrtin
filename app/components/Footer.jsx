"use client";
import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import Logo from "@/public/Images/logo.png"; // Adjust the path as necessary
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const sans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Styled Components
const FooterContainer = styled.footer`
  margin-top: 5rem;
  margin-bottom: 24px;
  font-family: ${sans.style.fontFamily};
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    font-size: 16px;

  }
`;
 
const LogoSection = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
 
  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const IconWrapper = styled.a`
  padding: 0.4rem;
  background-color: #025DE9;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
    @media (min-width: 768px) {
    padding: 0.75rem;
    border-radius: 16px;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, max-content);
    
    gap: 3rem;
  }

  @media (min-width: 768px) {
  justify-content: flex-end;}

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, max-content);
  }
`;
const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
  white-space: nowrap;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;

  li {
    margin-bottom: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
    white-space: nowrap;

    &:hover {
      color: #025DE9;
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-top: 1rem;
  .contact-item {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: color 0.3s ease;
    white-space: nowrap;

    &:hover {
      color: #025DE9;
    }
  }

  .contact-icon {
    color: #025DE9;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer className="section-padding-x">
      <div className="">
        <FooterContent>
          {/* Logo and Description */}
          <LogoSection>
            <Image src={Logo} alt="Logo" width={100}  />
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur. Et fermentum sagittis viverra mi egestas at feugiat. Elementum turpis proin magna eu ullamcorper sem.
            </Paragraph>
            <SocialIcons>
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, index) => (
                <IconWrapper key={index} href="#" aria-label={`${Icon.name} social media link`}>
                  <Icon size={24} />
                </IconWrapper>
              ))}
            </SocialIcons>
          </LogoSection>

          {/* Links Grid */}
          <LinksGrid>
            {/* Quick Links */}
            <div>
              <SectionTitle>Quick Links</SectionTitle>
              <LinksList>
                {['Home', 'How it works', 'Reviews', 'Our tutors', 'Become a tutor', 'Pricing'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </LinksList>
            </div>

            {/* Contact Info */}
            <div>
              <SectionTitle>Contact</SectionTitle>
              <ContactInfo>
                <div className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <span>info@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} className="contact-icon" />
                  <span>+989 5541 4511</span>
                </div>
              </ContactInfo>
            </div>
          </LinksGrid>
        </FooterContent>

        {/* Copyright */}
        <Copyright>
          &copy; {new Date().getFullYear()}  Fully Decked Up. All rights reserved

        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;