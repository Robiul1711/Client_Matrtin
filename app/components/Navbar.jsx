"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/public/Images/logo.png";
import { Button } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarContainer = styled.nav`
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  transition: all 0.3s ease;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: 'Sans', sans-serif;
  @media (min-width: 650px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {

    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
  @media (min-width: 1440px) {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }

  ${({ $scrolled }) => $scrolled && `
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    padding-bottom: 1rem;
  `}

  ${({ $scrolled }) => !$scrolled && `
    background-color: transparent;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media (min-width: 480px) {
      padding-top: 1.75rem;
      padding-bottom: 1.75rem;
    }

    @media (min-width: 640px) {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  `}
`;

const NavContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  ${({ $scrolled }) => $scrolled ? 'padding: 0;' : 'padding-top: 1.5rem;'}
`;

const NavLogo = styled(Image)`
  height: 2rem;
  width: auto;

  @media (min-width: 640px) {
    height: 2.5rem;
  }

  @media (min-width: 768px) {
    height: 3rem;
  }

  @media (min-width: 1024px) {
    height: 3.5rem;
  }
`;

const DesktopNav = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0.875rem 1rem;
  background-color: white;
  border-radius: 1rem;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  font-family: 'Open Sans', sans-serif;
  color: #5A5C5F;
  &:hover {
    color: #025DE9;
  }

  @media (min-width: 1280px) {
    font-size: 1rem;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  color: inherit;
`;

const Underline = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0.125rem;
  background-color: #025DE9;
  transition: width 0.3s ease;

  ${NavItem}:hover & {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

const DesktopButton = styled(Button)`
  && {
    background-color: #025DE9;
    color: white;
    padding: 12px 24px;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 1rem;
    transition: all 0.3s ease;
    text-transform: none;
    display: none;

    &:hover {
      background-color: #0148b8;
      transform: translateY(-1px);
    }

    @media (min-width: 640px) {
      display: block;
      padding: 0.5rem 1rem;
      font-size: 16px;
      border-radius: 0.7rem;
    }
      @media (min-width: 1536px) {
      padding: 0.75rem 1.5rem;
      font-size: 16px;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 640px) {
    width: 2rem;
    height: 2rem;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 40;
  padding-top: 5rem;
  padding: 1rem;
  transform: ${({ $open }) => $open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 2rem;
  padding: 0;
  list-style: none;
  margin-top: 90px;
    font-family: 'Open Sans', sans-serif;
`;

const MobileNavItem = styled.li`
  font-size: 1.125rem;
  font-weight: 600;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  color: #5A5C5F;
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
  }

  &:hover {
    color: #025DE9;
  }
`;


const MobileButton = styled(Button)`
  && {
    background-color: #025DE9;
    color: white;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-transform: none;
    width: 100%;
    margin-bottom: 0.5rem;

    &:hover {
      background-color: #0148b8;
    }
  }
    @media (min-width: 640px) {
  display: none;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "Our Tutors", href: "#our-tutors" },
    { name: "Become A Tutor", href: "#become-a-tutor" },
    { name: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    router.push(href);
  };

  return (
    <>
      <NavbarContainer $scrolled={scrolled}>
        <NavContent $scrolled={scrolled}>
          <Link href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
            <NavLogo src={logo} alt="Logo" width={140} height={56} />
          </Link>

          <DesktopNav>
            <NavList>
              {navLinks.map((link, index) => (
                <NavItem key={index}>
                  <NavLink 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </NavLink>
                  <Underline />
                </NavItem>
              ))}
            </NavList>
          </DesktopNav>

          <ButtonGroup>
            <DesktopButton>Tutor Login</DesktopButton>
            <DesktopButton>Get A Tutor Now</DesktopButton>
            <MobileMenuButton 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <MobileMenuIcon>
                {mobileMenuOpen ? <FiX size="100%" /> : <FiMenu size="100%" />}
              </MobileMenuIcon>
            </MobileMenuButton>
          </ButtonGroup>
        </NavContent>
      </NavbarContainer>

      <MobileMenu $open={mobileMenuOpen}>
        <MobileNavList>
          {navLinks.map((link, index) => (
            <MobileNavItem key={index}>
              <Link 
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </Link>
            </MobileNavItem>
          ))}
        </MobileNavList>
         
        <MobileButton>Tutor Login</MobileButton>
        <MobileButton>Get A Tutor Now</MobileButton>

    
      </MobileMenu>
    </>
  );
};

export default Navbar;