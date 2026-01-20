import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Parceiros = lazy(() => import("./pages/Parceiros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Recrutamento = lazy(() => import("./pages/Recrutamento"));
const SmartCities = lazy(() => import("./pages/SmartCities"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <Routes>
              <Route path="/" element={<Index />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/parceiros" element={<Parceiros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/recrutamento" element={<Recrutamento />} />
                <Route path="/smart-cities" element={<SmartCities />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
