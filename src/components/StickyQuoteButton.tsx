import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const StickyQuoteButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
      >
        <Link to="/contact" className="flex items-center space-x-2">
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Get a Quote</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyQuoteButton;