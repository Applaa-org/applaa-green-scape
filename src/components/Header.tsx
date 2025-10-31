import { Link } from '@tanstack/react-router';
import { Leaf, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const NavLink = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => (
  <Link
    to={to}
    className="text-sm font-medium text-gray-600 hover:text-green-800 transition-colors"
    activeProps={{ className: 'text-green-700 font-semibold' }}
    onClick={onClick}
  >
    {label}
  </Link>
);

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Green Scape
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex bg-green-700 hover:bg-green-800">
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <NavLink key={link.to} {...link} onClick={() => setIsSheetOpen(false)} />
                ))}
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link to="/contact" onClick={() => setIsSheetOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}