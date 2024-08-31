import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/homepage.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  filter: brightness(40%);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  white-space: nowrap; /* 텍스트가 다음 줄로 넘어가지 않도록 설정 */
`;

const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const SubHeading = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 3em;
  margin-top: 0.5em;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 1.5em;
  line-height: 1.5;
  max-width: 800px;
  margin-top: 1em;
  white-space: nowrap; /* 텍스트가 다음 줄로 넘어가지 않도록 설정 */
  overflow: hidden; /* 텍스트가 너무 길 경우 숨김 처리 */
  text-overflow: ellipsis; /* 말줄임표(...)를 표시 */

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ASection = () => {
  return (
    <>
      <BackgroundImage />
      <TextContainer>
        <Heading>신뢰와 전문성을</Heading>
        <SubHeading>갖춘 박석훈 변호사</SubHeading>
        <Paragraph>
          다년간의 경험과 깊은 법률 지식을 바탕으로
          <br />
          고객의 권리와 이익을 최우선으로 보호하고
          <br />
          복잡한 법적 문제를 신속하게 해결합니다.
        </Paragraph>
      </TextContainer>
    </>
  );
};

export default ASection;
