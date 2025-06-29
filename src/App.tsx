
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import FoundersVision from "./pages/FoundersVision";
import OpenAccount from "./pages/OpenAccount";
import CashManagement from "./pages/CashManagement";
import NotFound from "./pages/NotFound";
import FOManagement from "./pages/FOManagement";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import JobApplication from "./pages/JobApplication";
import AlgorithmicTrading from "./pages/AlgorithmicTrading";
import AIResearch from "./pages/AIResearch";
import Services from "./pages/Services";
import ViewStrategies from "./pages/ViewStrategies";
import RiskManagement from "./pages/RiskManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founders-vision" element={<FoundersVision />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/cash-management" element={<CashManagement />} />
          <Route path="/fo-management" element={<FOManagement />} />
          <Route path="/algorithmic-trading" element={<AlgorithmicTrading />} />
          <Route path="/ai-research" element={<AIResearch />} />
          <Route path="/services" element={<Services />} />
          <Route path="/view-strategies" element={<ViewStrategies />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/job-application" element={<JobApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
