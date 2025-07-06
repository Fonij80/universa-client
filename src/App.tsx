import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "@/contexts/UserContext";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nextProvider i18n={i18n}>
        <UserProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </UserProvider>
      </I18nextProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
