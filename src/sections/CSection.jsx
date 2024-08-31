import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 20px;
  background-color: #f5f5f5;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h1`
  font-size: 48px;
  color: #1a237e;
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  font-size: 20px;
  color: #555;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background-color: rgba(224, 247, 250, 0.3);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const NumberHeader = styled.h2`
  color: #1a237e;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 3px;
  background-color: #1a237e;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 5px 0;
  }
`;

const ServiceDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 5px 0;
  }
`;

const CSection = () => {
  return (
    <MainContainer>
      <SectionHeader>
        <SectionTitle>FIELDS OF EXPERTISE</SectionTitle>
        <SectionDescription>고객의 요구에 맞는 전문 법률 서비스</SectionDescription>
      </SectionHeader>
      <Container>
        <ServiceCard>
          <NumberHeader>01</NumberHeader>
          <Divider />
          <ServiceTitle>자문</ServiceTitle>
          <ServiceDescription>
            실무경험이 풍부한 장점을 이용하여 효율적이고 정확한 서비스를
            제공하고, 의뢰인의 입장에서 가장 바람직한 해결책이 무엇인지에 대한
            방법을 제시해드립니다.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <NumberHeader>02</NumberHeader>
          <Divider />
          <ServiceTitle>형사</ServiceTitle>
          <ServiceDescription>
            사건의 성격과 내용을 면밀히 분석하여, 수사 및 초기 단계에서부터
            효율적으로 대응할 수 있는 최적의 솔루션을 제공합니다.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <NumberHeader>03</NumberHeader>
          <Divider />
          <ServiceTitle>민사</ServiceTitle>
          <ServiceDescription>
            탁월한 소송 수행 능력을 바탕으로 하여 분쟁 발생을 미연에 방지하고
            분쟁 후 대응, 소송으로 이어지는 모든 단계에 대응방안을 구축하여
            의뢰인의 이익을 극대화하는 법률서비스를 제공합니다.
          </ServiceDescription>
        </ServiceCard>
      </Container>
    </MainContainer>
  );
};

export default CSection;