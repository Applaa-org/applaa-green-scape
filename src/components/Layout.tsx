import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MadeWithApplaa } from './made-with-applaa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MadeWithApplaa />
    </div>
  );
};

export default Layout;