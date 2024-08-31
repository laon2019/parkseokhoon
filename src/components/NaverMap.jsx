import React, { useEffect, useRef } from "react";

const NaverMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (window.naver && window.naver.maps && mapContainerRef.current) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(33.450701, 126.570667), // 초기 중심 좌표 (제주도 대략적인 중앙)
        zoom: 10,
      };
      const map = new window.naver.maps.Map(
        mapContainerRef.current,
        mapOptions
      );

      // 마커 추가
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(33.45606, 126.560046),
        map: map,
        title: "제주 제주시 이도이동 남광북5길 10 J빌딩 4층 402호",
      });
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "500px", height: "500px" }}
    ></div>
  );
};

export default NaverMap;
