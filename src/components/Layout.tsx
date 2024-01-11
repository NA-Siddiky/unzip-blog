import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import StickyBar from './StickyBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <StickyBar/>
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
