import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import NaverMap from '../components/NaverMap';

const HomePage = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          >
            <source src="/hompage.mp4" type="video/mp4" />
          </video>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
          <h1>Section 2</h1>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
          <h1>Section 3</h1>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh', backgroundColor: '#c0c0c0' }}>
          <h1>Section 4</h1>
          <div>
            <NaverMap />
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default HomePage;
