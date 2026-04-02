import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
