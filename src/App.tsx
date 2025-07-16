import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnergyTheme from "./pages/EnergyTheme";
import WasteManagementTheme from "./pages/WasteManagementTheme";
import NaturalResourcesTheme from "./pages/NaturalResourcesTheme";
import NotFound from "./pages/NotFound";
import Mentors from "./components/Mentors";
import MentorDetail from "./components/MentorDetail";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/themes/energy" element={<EnergyTheme />} />
          <Route path="/themes/waste-management" element={<WasteManagementTheme />} />
          <Route path="/themes/natural-resources" element={<NaturalResourcesTheme />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentor/:id" element={<MentorDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;