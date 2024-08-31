import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader isScrolled={isScrolled}>
      <HeaderContent>
        <Logo>박석훈 법률사무소</Logo>
        <Divider />
        <Nav isMenuOpen={isMenuOpen}>
          <NavItem>소개</NavItem>
          <NavItem>경력</NavItem>
          <NavItem>업무분야</NavItem>
          <NavItem>오시는 길</NavItem>
        </Nav>
        <PhoneNumber>📞 010-3799-4321</PhoneNumber>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PhoneNumber = styled.div`
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
