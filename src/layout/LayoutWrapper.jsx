import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};