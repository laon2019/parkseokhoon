import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a237e;
  color: #ffffff;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 24px;
  &:hover {
    color: #e0e0e0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>회사 소개</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">회사 개요</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">연혁</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">팀</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>서비스</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">법률 자문</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">소송 대리</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">계약 검토</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>고객 지원</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">문의하기</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">이용약관</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>연락처</FooterTitle>
          <FooterList>
            <FooterListItem>서울특별시 강남구 테헤란로 123</FooterListItem>
            <FooterListItem>전화: 02-1234-5678</FooterListItem>
            <FooterListItem>이메일: info@lawfirm.com</FooterListItem>
          </FooterList>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="ri-facebook-fill"></i> {/* Remix Icon 클래스 이름 */}
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="ri-twitter-fill"></i> {/* Remix Icon 클래스 이름 */}
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="ri-instagram-fill"></i> {/* Remix Icon 클래스 이름 */}
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="ri-linkedin-fill"></i> {/* Remix Icon 클래스 이름 */}
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © 2024 법률사무소 이름. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
