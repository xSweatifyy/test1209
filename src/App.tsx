import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CookieConsent } from "@/components/CookieConsent";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const ONas = lazy(() => import("./pages/ONas"));
const Kurzy = lazy(() => import("./pages/Kurzy"));
const L17 = lazy(() => import("./pages/L17"));
const Kontakty = lazy(() => import("./pages/Kontakty"));
const KeStazeni = lazy(() => import("./pages/KeStazeni"));
const OnlinePrihlaska = lazy(() => import("./pages/OnlinePrihlaska"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4" />
      <p className="text-muted-foreground">Načítání...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/kurzy" element={<Kurzy />} />
            <Route path="/l17" element={<L17 />} />
            <Route path="/kontakty" element={<Kontakty />} />
            <Route path="/ke-stazeni" element={<KeStazeni />} />
            <Route path="/online-prihlaska" element={<OnlinePrihlaska />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
