// BSection.jsx
import React from "react";
import styled from "styled-components";

// 전체 레이아웃을 감싸는 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

// 이미지와 텍스트를 감싸는 컨테이너
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;

  // 화면 크기가 768px 이하일 때 레이아웃을 위아래로 변경
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 이미지 섹션을 감싸는 컨테이너
const ImageWrapper = styled.div`
  flex: 1;
  padding: 10px; // 내부 여백 추가
`;

// 텍스트 섹션을 감싸는 컨테이너
const TextWrapper = styled.div`
  flex: 1;
  padding: 10px; // 내부 여백 추가
`;

// 이미지 섹션
const ImageSection = styled.div`
  background-image: url("/intro.jpg"); // 이미지 경로 설정
  background-size: cover; // 이미지가 섹션을 덮도록 설정
  background-position: center; // 이미지 중앙 정렬
  height: 100%; // 이미지 섹션 높이 설정
`;

// 텍스트 섹션
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 내용 수직 중앙 정렬
  padding: 20px 10px;
`;

// 제목 스타일
const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 40px;
  color: #1a237e;
`;

// 설명 스타일
const Description = styled.p`
  margin: 0;
  font-size: 18px;
  color: #666;
`;

// BSection 컴포넌트
const BSection = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <ImageSection />
        </ImageWrapper>
        <TextWrapper>
          <TextSection>
            <Title>INTRODUCE</Title>
            <Description>- 연세대학교 법학과 졸업</Description>
          </TextSection>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default BSection;
