import React, { useEffect, useRef } from "react";

const NaverMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (window.naver && window.naver.maps && mapContainerRef.current) {
      // 초기 맵 옵션 설정
      const mapOptions = {
        center: new window.naver.maps.LatLng(33.4932863249938, 126.536669251269), // 마커 위치로 설정
        zoom: 18, // 줌 레벨 조정
      };
      const map = new window.naver.maps.Map(mapContainerRef.current, mapOptions);

      // 마커 추가
      const markerPosition = new window.naver.maps.LatLng(33.4932863249938, 126.536669251269);
      const marker = new window.naver.maps.Marker({
        position: markerPosition,
        map: map,
        title: "제주 제주시 이도이동 남광북5길 10 J빌딩 4층 402호",
      });

      // InfoWindow 설정
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="width:200px; padding:10px; text-align:center; font-size:14px; color:#333; background-color:#f9f9f9; border:1px solid #000; border-radius:5px;">
            <strong>변호사박석훈법률사무소</strong><br/>
            제주 제주시 이도이동 남광북5길 10 J빌딩 4층 402호
          </div>
        `,
        borderColor: "#ddd", // 테두리 색상
        backgroundColor: "#f9f9f9", // 배경색
        pixelOffset: new window.naver.maps.Point(0, -20) // InfoWindow 위치 조정
      });

      // InfoWindow를 맵과 마커에 열어줍니다.
      infoWindow.open(map, marker);
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
};

export default NaverMap;
