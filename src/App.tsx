import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet,
  NotFoundRoute
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create page routes
const indexRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/', component: Index })
const aboutRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/about', component: About })
const servicesRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/services', component: Services })
const portfolioRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/portfolio', component: Portfolio })
const testimonialsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/testimonials', component: Testimonials })
const contactRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact })

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  portfolioRoute,
  testimonialsRoute,
  contactRoute,
])

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
});

// Create router
const router = createRouter({ 
  routeTree,
  notFoundRoute,
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