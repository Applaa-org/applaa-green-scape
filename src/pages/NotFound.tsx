import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center container py-16">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="inline-block bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;