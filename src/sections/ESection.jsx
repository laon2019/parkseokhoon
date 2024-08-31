// ESection.jsx
import React from "react";
import NaverMap from "../components/NaverMap";

const ESection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // 전체 높이를 차지하도록 설정
        padding: "20px", // 여백 추가
      }}
    >
      <div
        style={{
          color: "#1a237e",
          fontSize: "50px",
          fontWeight: "bold",
          marginBottom: "10px", // LOCATION과 주소 사이의 간격
        }}
      >
        LOCATION
      </div>
      <div
        style={{
          color: "#333", // 주소 색상
          fontSize: "18px",
          textAlign: "center", // 주소 중앙 정렬
          marginBottom: "20px", // 주소와 지도 사이의 간격
        }}
      >
        제주 제주시 이도이동 남광북5길 10 J빌딩 4층 402호
      </div>
      <div
        style={{
          border: "1px solid #000",
          width: "80%",
          maxWidth: "1200px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NaverMap />
      </div>
    </div>
  );
};

export default ESection;
