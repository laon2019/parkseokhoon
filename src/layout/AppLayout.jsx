import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';

const AppLayout = () => {
  return (
    <LayoutWrapper>
      <div>
        <Outlet />
      </div>
    </LayoutWrapper>
  );
};

export default AppLayout;