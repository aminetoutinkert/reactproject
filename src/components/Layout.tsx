import { ReactNode } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export default function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavigationBar />
      <main className="flex-grow-1" style={{paddingTop: '76px'}}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
