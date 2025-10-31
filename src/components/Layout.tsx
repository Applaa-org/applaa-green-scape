import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import StickyQuoteButton from './StickyQuoteButton';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <StickyQuoteButton />
    </div>
  );
}