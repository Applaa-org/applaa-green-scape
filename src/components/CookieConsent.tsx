import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="container max-w-7xl mx-auto p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-green-700" />
                <p className="text-sm text-gray-700">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
            </div>
            <Button onClick={handleAccept} className="bg-green-700 hover:bg-green-800 w-full sm:w-auto">
                Accept
            </Button>
        </div>
    </div>
  );
}