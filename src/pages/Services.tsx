import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Professional Services
<dyad-problem-report summary="2 problems">
<problem file="src/App.tsx" line="46" column="106" code="2304">Cannot find name 'Privacy'.</problem>
<problem file="src/App.tsx" line="47" column="102" code="2304">Cannot find name 'Terms'.</problem>
</dyad-problem-report>

<applaa-write path="src/App.tsx" description="App component with privacy and terms routes imported">
import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from '@/components/Layout';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
})

// Create page routes
const indexRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/', component: Index });
const aboutRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const servicesRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/services', component: Services });
const portfolioRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/portfolio', component: Portfolio });
const testimonialsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/testimonials', component: Testimonials });
const contactRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });
const privacyRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/privacy', component: Privacy });
const termsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/terms', component: Terms });

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  portfolioRoute,
  testimonialsRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;