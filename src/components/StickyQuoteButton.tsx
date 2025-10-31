import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function StickyQuoteButton() {
  return (
    <Button asChild className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg bg-green-700 hover:bg-green-800 md:hidden">
      <Link to="/contact">
        <Phone className="h-6 w-6" />
        <span className="sr-only">Get a Quote</span>
      </Link>
    </Button>
  );
}